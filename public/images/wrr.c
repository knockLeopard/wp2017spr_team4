#include <linux/jiffies.h>
#include <linux/cpumask.h>
#include <linux/spinlock.h>
#include <linux/sysfs.h>
#include "sched.h"

#define MIN_INIT 0xffffffff
#define MAX_INIT 0x0

unsigned long lb_times;
spinlock_t lb_times_lock;

DEFINE_SPINLOCK(lb_times_lock);

void init_wrr_rq(struct wrr_rq *wrr_rq)
{
	lb_times = get_jiffies_64() + 2*HZ;
	wrr_rq->size = 0;
	wrr_rq->weight_sum = 0;
	INIT_LIST_HEAD(&wrr_rq->head);
	raw_spin_lock_init(&wrr_rq->wrr_runtime_lock);
}

static inline int on_null_domain(int cpu)
{
	return !rcu_dereference_sched(cpu_rq(cpu)->sd);
}

void wrr_load_balance(int cpu)
{
	int i, online_cpu, src_cpu, dst_cpu;
	unsigned int max, min, cand_weight;

	unsigned long flags;

	struct task_struct *wse_p;
	struct task_struct *migrated;

	struct rq *src_rq;
	struct rq *dst_rq;
	struct rq *iter_rq;
	struct wrr_rq *iter_wrr_rq;
	struct wrr_rq *max_rq;
	struct wrr_rq *min_rq;

	struct list_head *pos;

	struct sched_wrr_entity *temp;
	struct sched_wrr_entity *cand;

	max = MAX_INIT;
	min = MIN_INIT;
	online_cpu = 0;

	spin_lock(&lb_times_lock);
	if (time_after(jiffies, lb_times)
		&& likely(!on_null_domain(cpu)))
		lb_times = get_jiffies_64() + 2*HZ;
	else {
		spin_unlock(&lb_times_lock);
		return;
	}
	spin_unlock(&lb_times_lock);

	rcu_read_lock();
	for_each_online_cpu(i) {
		iter_rq = cpu_rq(i);

		if (iter_rq == NULL)
			continue;

		iter_wrr_rq = &iter_rq->wrr;
		online_cpu++;

		if (iter_wrr_rq->weight_sum >= max) {
			max = iter_wrr_rq->weight_sum;
			max_rq = iter_wrr_rq;
			src_cpu = i;
		}

		if (iter_wrr_rq->weight_sum <= min) {
			min = iter_wrr_rq->weight_sum;
			min_rq = iter_wrr_rq;
			dst_cpu = i;
		}
	}
	rcu_read_unlock();

	if (max_rq == min_rq)
		return;

	if (online_cpu == 1)
		return;

	if (max - min  <= 1)
		return;

	src_rq = cpu_rq(src_cpu);
	dst_rq = cpu_rq(dst_cpu);

	local_irq_save(flags);
	double_rq_lock(dst_rq, src_rq);

	cand_weight = 0;

	list_for_each(pos, &max_rq->head) {

		temp = list_entry(pos, struct sched_wrr_entity, run_list);
		wse_p = container_of(temp, struct task_struct, wrr);

		if (!cpumask_test_cpu(dst_cpu, &wse_p->cpus_allowed))
			continue;

		if (task_running(src_rq, wse_p))
			continue;

		if (max - temp->weight < min + temp->weight)
			continue;

		if (cand_weight > temp->weight)
			continue;

		cand_weight = temp->weight;
		cand = temp;
		migrated = wse_p;
	}

	if (cand_weight == 0)
		goto done_irq_double;

	if (cand->on_wrr_rq == 0)
		goto done_irq_double;

	deactivate_task(src_rq, migrated, 0);
	set_task_cpu(migrated, dst_cpu);
	activate_task(dst_rq, migrated, 0);

done_irq_double:
	double_rq_unlock(dst_rq, src_rq);
	local_irq_restore(flags);
}

static void requeue_task_wrr(struct rq *rq, struct task_struct *p, int head)
{
	struct wrr_rq *wrr_rq = &rq->wrr;
	struct sched_wrr_entity *wrr_se = &p->wrr;
	struct list_head *queue = &wrr_rq->head;

	if (wrr_se->on_wrr_rq == 0)
		return;

	list_move_tail(&wrr_se->run_list, queue);
}

static void enqueue_task_wrr(struct rq *rq, struct task_struct *p, int flags)
{
	struct sched_wrr_entity *wrr_se = &p->wrr;
	struct wrr_rq *wrr_rq = &rq->wrr;
	struct list_head *queue = &wrr_rq->head;

	if (wrr_se->on_wrr_rq == 1)
		return;

	list_add_tail(&wrr_se->run_list, queue);
	++wrr_rq->size;
	wrr_rq->weight_sum += wrr_se->weight;
	wrr_se->on_wrr_rq = 1;
}

static void dequeue_task_wrr(struct rq *rq, struct task_struct *p, int flags)
{
	struct sched_wrr_entity *wrr_se = &p->wrr;
	struct wrr_rq *wrr_rq = &rq->wrr;

	if (wrr_se->on_wrr_rq == 0)
		return;

	list_del(&wrr_se->run_list);
	--wrr_rq->size;
	wrr_rq->weight_sum -= wrr_se->weight;
	wrr_se->on_wrr_rq = 0;
}

static void check_preempt_curr_wrr(struct rq *rq, struct task_struct *p,
				int flags)
{
}

static void put_prev_task_wrr(struct rq *rq, struct task_struct *p)
{
}

static void set_curr_task_wrr(struct rq *rq)
{
	struct task_struct *p = rq->curr;

	rq->wrr.curr = &p->wrr;
}

static struct task_struct *pick_next_task_wrr(struct rq *rq)
{
	struct sched_wrr_entity *wrr_se;
	struct list_head *head;
	struct task_struct *p;
	struct wrr_rq *wrr_rq;

	wrr_rq = &rq->wrr;

	if (!wrr_rq->size)
		return NULL;

	head = &wrr_rq->head;
	wrr_se = list_entry(head->next, struct sched_wrr_entity, run_list);

	p = container_of(wrr_se, struct task_struct, wrr);

	return p;
}

static void task_tick_wrr(struct rq *rq, struct task_struct *p, int queued)
{

	struct sched_wrr_entity *wrr_se = &p->wrr;

	touch_softlockup_watchdog();

	if (rq->curr->sched_class != &wrr_sched_class)
		return;

	if (p->policy != SCHED_WRR)
		return;

	if (--p->wrr.time_slice)
		return;

	p->wrr.time_slice = (p->wrr.weight * HZ) / 100;

	if (wrr_se->run_list.prev != wrr_se->run_list.next) {
		requeue_task_wrr(rq, p, 0);
		set_tsk_need_resched(p);
	}
}

static void task_fork_wrr(struct task_struct *p)
{
	struct sched_wrr_entity *wrr_se;

	if (p == NULL)
		return;

	wrr_se = &p->wrr;

	wrr_se->on_wrr_rq = 0;

	p->wrr.time_slice = (p->wrr.weight * HZ) / 100;
}

static void switched_to_wrr(struct rq *rq, struct task_struct *p)
{
	if (!p->wrr.on_wrr_rq)
		return;

	p->wrr.weight = 10;
	p->wrr.time_slice = (p->wrr.weight * HZ) / 100;

	if (rq->curr == p)
		resched_task(rq->curr);
}

static void prio_changed_wrr(struct rq *rq, struct task_struct *p,
				int oldprio)
{
}

static void task_waking_wrr(struct task_struct *p)
{
}

static void task_woken_wrr(struct rq *rq, struct task_struct *p)
{
}

static int
select_task_rq_wrr(struct task_struct *p, int sd_flag, int flags)
{
	struct rq *iter_rq;
	struct wrr_rq *iter_wrr_rq;
	int i, selected;
	unsigned int weight_check, min_weight;

	weight_check = MIN_INIT;

	rcu_read_lock();
	for_each_online_cpu(i) {
		iter_rq = cpu_rq(i);

		iter_wrr_rq = &iter_rq->wrr;
		min_weight = iter_wrr_rq->weight_sum;

		if (min_weight <= weight_check) {
			selected = i;
			weight_check = min_weight;
		}
	}
	rcu_read_unlock();

	return selected;
}

static void yield_task_wrr(struct rq *rq)
{
	struct task_struct *p;

	p = rq->curr;

	if (p == NULL)
		return;

	if (!task_running(rq, p))
		return;

	p->wrr.time_slice = (p->wrr.weight * HZ) / 100;
	requeue_task_wrr(rq, p, 0);
}

static unsigned int get_rr_interval_wrr(struct rq *rq, struct task_struct *p)
{
	if (p == NULL)
		return -EINVAL;

	return (p->wrr.weight * HZ) / 100;
}

const struct sched_class wrr_sched_class = {
	.next = &fair_sched_class,
	.enqueue_task = enqueue_task_wrr,
	.dequeue_task       = dequeue_task_wrr,
	.yield_task	    = yield_task_wrr,

	.check_preempt_curr = check_preempt_curr_wrr,

	.pick_next_task     = pick_next_task_wrr,
	.put_prev_task	    = put_prev_task_wrr,
	.set_curr_task	    = set_curr_task_wrr,

	.switched_to	    = switched_to_wrr,

	.prio_changed	    = prio_changed_wrr,
#ifdef CONFIG_SMP
	.select_task_rq = select_task_rq_wrr,
	.task_waking	= task_waking_wrr,
	.task_woken	= task_woken_wrr,
#endif

	.get_rr_interval = get_rr_interval_wrr,

	.task_tick      = task_tick_wrr,
	.task_fork	= task_fork_wrr,
};
