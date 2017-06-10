#include <stdio.h>
#include <sched.h>
#include <unistd.h>

struct sched_param param;

int sched_getweight(pid_t pid)
{
	return (int) syscall(385, pid);
}

int sched_setweight(pid_t pid, int weight)
{
	return (int) syscall(384, pid, weight);
}

int main(){

	pid_t temp[30];
	int result;
	int i, j, k;
	// set schedule.

	printf("sched address: [%p]\n", sched_getweight(getpid()));

	param.sched_priority = 0;
	if((result = sched_setscheduler(getpid(), 6, &param)) == -1){

		printf("sched_setscheduler of process [%d] failed\n", getpid());
		perror("The following error occurred.");
		return 0;
		// error message check.
	}

	sleep(1);

	printf("sched address: [%p]\n", sched_getweight(getpid()));
	printf("return value of sched_setscheduler : %d\n", result);

	i = 0;

child:
	// Segmentation fault 
	if(temp[i] = fork()){
		printf("%3d parent's scheduler is %d\n", i+1, sched_getscheduler(getpid()));
		sched_setweight(getpid(), i%20 + 1);
		j = 0;

		while (j<30000) {

			k = 0;
			while (k<30000) {
				k++;
			}
			j++;
		}

		printf("%3d parent's scheduler is done\n", i+1); 
	} else {
		i++;

		if (i < 30)
			goto child;
	}

	wait();

	if (i == 0)
		printf("DONE\n");

	return 0;
}
