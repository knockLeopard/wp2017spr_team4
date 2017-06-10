// word frequencies of first two chapters of Oliver Twist
var words = [
  
  {text: 'have', size: 70},
  {text: 'Mrs', size: 56},
  {text: 'say', size: 46},
  {text: 'said', size: 36},
  {text: 'bumble', size: 29},
  {text: 'will', size: 29},
  {text: 'Mann', size: 27},
  {text: 'Mr', size: 27},
  {text: 'very', size: 26},
  {text: 'child', size: 20},
  {text: 'all', size: 19},
  {text: 'boy', size: 19},
  {text: 'gentleman', size: 19},
  {text: 'great', size: 19},
  {text: 'take', size: 19},
  {text: 'but', size: 18},
  {text: 'beadle', size: 16},
  {text: 'twist', size: 16},
  {text: 'board', size: 15},
  {text: 'more', size: 15},
  {text: 'one', size: 15},
  {text: 'workhouse', size: 15},
  {text: 'parish', size: 14},
  {text: 'there', size: 14},
  {text: 'come', size: 13},
  {text: 'hand', size: 13},
  {text: 'know', size: 13},
  {text: 'sir', size: 13},
  {text: 'being', size: 12},
  {text: 'head', size: 12},
  {text: 'make', size: 12},
  {text: 'out', size: 12},
  {text: 'can', size: 11},
  {text: 'little', size: 11},
  {text: 'reply', size: 11},
  {text: 'any', size: 10},
  {text: 'cry', size: 10},
  {text: 'good', size: 10},
  {text: 'name', size: 10},
  {text: 'poor', size: 10},
  {text: 'time', size: 10},
  {text: 'two', size: 10},
  {text: 'after', size: 9},
  {text: 'dear', size: 9},
  {text: 'get', size: 9},
  {text: 'gruel', size: 9},
  {text: 'long', size: 9},
  {text: 'may', size: 9},
  {text: 'never', size: 9},
  {text: 'some', size: 9},
  {text: 'well', size: 9},
  {text: 'white', size: 9},
  {text: 'woman', size: 9},
  {text: 'chair', size: 8},
  {text: 'day', size: 8},
  {text: 'give', size: 8},
  {text: 'inquire', size: 8},
  {text: 'made', size: 8},
  {text: 'next', size: 8},
  {text: 'now', size: 8},
  {text: 'other', size: 8},
  {text: 'over', size: 8},
  {text: 'small', size: 8},
  {text: 'surgeon', size: 8},
  {text: 'think', size: 8},
  {text: 'too', size: 8},
  {text: 'walk', size: 8},
  {text: 'want', size: 8},
  {text: 'bless', size: 7},
  {text: 'eye', size: 7},
  {text: 'man', size: 7},
  {text: 'master', size: 7},
  {text: 'most', size: 7},
  {text: 'old', size: 7},
  {text: 'people', size: 7},
  {text: 'see', size: 7},
  {text: 'another', size: 6},
  {text: 'at all', size: 6},
  {text: 'authorities', size: 6},
  {text: 'authority', size: 6},
  {text: 'away', size: 6},
  {text: 'face', size: 6},
  {text: 'gate', size: 6},
  {text: 'half', size: 6},
  {text: 'hands', size: 6},
  {text: 'heart', size: 6},
  {text: 'last', size: 6},
  {text: 'might', size: 6},
  {text: 'nurse', size: 6},
  {text: 'once', size: 6},
  {text: 'place', size: 6},
  {text: 'room', size: 6},
  {text: 'table', size: 6},
  {text: 'three', size: 6},
  {text: 'voice', size: 6},
  {text: 'waistcoat', size: 6},
  {text: 'wash', size: 6},
  {text: 'water', size: 6},
  {text: 'a little', size: 5},
  {text: 'bow', size: 5},
  {text: 'business', size: 5},
  {text: 'drop', size: 5},
  {text: 'eyes', size: 5},
  {text: 'fall', size: 5},
  {text: 'find', size: 5},
  {text: 'gin', size: 5},
  {text: 'high', size: 5},
  {text: 'house', size: 5},
  {text: 'infant', size: 5},
  {text: 'night', size: 5},
  {text: 'nobody', size: 5},
  {text: 'orphan', size: 5},
  {text: 'pauper', size: 5},
  {text: 'perhaps', size: 5},
  {text: 'rather', size: 5},
  {text: 'round', size: 5},
  {text: 'sit', size: 5},
  {text: 'world', size: 5},
  {text: 'young', size: 5},
  {text: 'add', size: 4},
  {text: 'ask', size: 4},
  {text: 'at once', size: 4},
  {text: 'behind', size: 4},
  {text: 'bottle', size: 4},
  {text: 'bread', size: 4},
  {text: 'care', size: 4},
  {text: 'copper', size: 4},
  {text: 'die', size: 4},
  {text: 'farm', size: 4},
  {text: 'fat', size: 4},
  {text: 'father', size: 4},
  {text: 'fell', size: 4},
  {text: 'female', size: 4},
  {text: 'going', size: 4},
  {text: 'happen', size: 4},
  {text: 'hat', size: 4},
  {text: 'here', size: 4},
  {text: 'however', size: 4},
  {text: 'hungry', size: 4},
  {text: 'in this', size: 4},
  {text: 'keep', size: 4},
  {text: 'large', size: 4},
  {text: 'low', size: 4},
  {text: 'matter', size: 4},
  {text: 'out of', size: 4},
  {text: 'pound', size: 4},
  {text: 'public', size: 4},
  {text: 'quarter', size: 4},
  {text: 'quite', size: 4},
  {text: 'raise', size: 4},
  {text: 'sleep', size: 4},
  {text: 'spirit', size: 4},
  {text: 'ten', size: 4},
  {text: 'turn', size: 4},
  {text: 'wanted', size: 4},
  {text: 'washing', size: 4},
  {text: 'week', size: 4},
  {text: 'word', size: 4},
  {text: 'age', size: 3},
  {text: 'arm', size: 3},
  {text: 'ask for', size: 3},
  {text: 'assistant', size: 3},
  {text: 'be born', size: 3},
  {text: 'bed', size: 3},
  {text: 'bill', size: 3},
  {text: 'body', size: 3},
  {text: 'born', size: 3},
  {text: 'brick', size: 3},
  {text: 'bring', size: 3},
  {text: 'cane', size: 3},
  {text: 'case', size: 3},
  {text: 'Christian', size: 3},
  {text: 'circumstance', size: 3},
  {text: 'cock', size: 3},
  {text: 'cocked hat', size: 3},
  {text: 'cold', size: 3},
  {text: 'come to', size: 3},
  {text: 'companion', size: 3},
  {text: 'consequence', size: 3},
  {text: 'corner', size: 3},
  {text: 'deposit', size: 3},
  {text: 'dress', size: 3},
  {text: 'eat', size: 3},
  {text: 'eight', size: 3},
  {text: 'expect', size: 3},
  {text: 'expected', size: 3},
  {text: 'experimental', size: 3},
  {text: 'feed', size: 3},
  {text: 'fire', size: 3},
  {text: 'glass', size: 3},
  {text: 'go to', size: 3},
  {text: 'green', size: 3},
  {text: 'halfpenny', size: 3},
  {text: 'hang', size: 3},
  {text: 'have got', size: 3},
  {text: 'hint', size: 3},
  {text: 'hunger', size: 3},
  {text: 'interest', size: 3},
  {text: 'known', size: 3},
  {text: 'latter', size: 3},
  {text: 'lay', size: 3},
  {text: 'lead', size: 3},
  {text: 'let', size: 3},
  {text: 'live', size: 3},
  {text: 'mention', size: 3},
  {text: 'month', size: 3},
  {text: 'morning', size: 3},
  {text: 'ninth', size: 3},
  {text: 'offer', size: 3},
  {text: 'old woman', size: 3},
  {text: 'open', size: 3},
  {text: 'operation', size: 3},
  {text: 'order', size: 3},
  {text: 'pale', size: 3},
  {text: 'pick', size: 3},
  {text: 'possess', size: 3},
  {text: 'possible', size: 3},
  {text: 'pray', size: 3},
  {text: 'process', size: 3},
  {text: 'proper', size: 3},
  {text: 'purpose', size: 3},
  {text: 'raised', size: 3},
  {text: 'remove', size: 3},
  {text: 'removed', size: 3},
  {text: 'render', size: 3},
  {text: 'set', size: 3},
  {text: 'shake', size: 3},
  {text: 'sitting', size: 3},
  {text: 'smile', size: 3},
  {text: 'somewhat', size: 3},
  {text: 'speak', size: 3},
  {text: 'spoon', size: 3},
  {text: 'supper', size: 3},
  {text: 'sure', size: 3},
  {text: 'system', size: 3},
  {text: 'tender', size: 3},
  {text: 'thin', size: 3},
  {text: 'troublesome', size: 3},
  {text: 'twenty', size: 3},
  {text: 'usually', size: 3},
  {text: 'words', size: 3},
  {text: 'yes', size: 3},
  {text: 'a great deal', size: 2},
  {text: 'accident', size: 2},
  {text: 'accompanied', size: 2},
  {text: 'accompany', size: 2},
  {text: 'advance', size: 2},
  {text: 'advancing', size: 2},
  {text: 'allowance', size: 2},
  {text: 'answer', size: 2},
  {text: 'appear', size: 2},
  {text: 'apron', size: 2},
  {text: 'arrive', size: 2},
  {text: 'assign', size: 2},
  {text: 'astonishment', size: 2},
  {text: 'at last', size: 2},
  {text: 'attend', size: 2},
  {text: 'basin', size: 2},
  {text: 'bedstead', size: 2},
  {text: 'besides', size: 2},
  {text: 'birth', size: 2},
  {text: 'birthday', size: 2},
  {text: 'bowed', size: 2},
  {text: 'bowl', size: 2},
  {text: 'bowls', size: 2},
  {text: 'breast', size: 2},
  {text: 'brief', size: 2},
  {text: 'bring up', size: 2},
  {text: 'cast', size: 2},
  {text: 'catch', size: 2},
  {text: 'class', size: 2},
  {text: 'clothe', size: 2},
  {text: 'common', size: 2},
  {text: 'compel', size: 2},
  {text: 'compose', size: 2},
  {text: 'conduct', size: 2},
  {text: 'considerable', size: 2},
  {text: 'consolation', size: 2},
  {text: 'contract', size: 2},
  {text: 'convince', size: 2},
  {text: 'convinced', size: 2},
  {text: 'cook', size: 2},
  {text: 'countenance', size: 2},
  {text: 'couple', size: 2},
  {text: 'cry for', size: 2},
  {text: 'crying', size: 2},
  {text: 'cuff', size: 2},
  {text: 'deal', size: 2},
  {text: 'decidedly', size: 2},
  {text: 'deeply', size: 2},
  {text: 'diet', size: 2},
  {text: 'difficulty', size: 2},
  {text: 'dinner', size: 2},
  {text: 'directly', size: 2},
  {text: 'discover', size: 2},
  {text: 'draw', size: 2},
  {text: 'ecstasy', size: 2},
  {text: 'elderly', size: 2},
  {text: 'evening', size: 2},
  {text: 'excellent', size: 2},
  {text: 'except', size: 2},
  {text: 'experience', size: 2},
  {text: 'extraordinary', size: 2},
  {text: 'faint', size: 2},
  {text: 'fall into', size: 2},
  {text: 'fist', size: 2},
  {text: 'floor', size: 2},
  {text: 'follow', size: 2},
  {text: 'food', size: 2},
  {text: 'fool', size: 2},
  {text: 'forehead', size: 2},
  {text: 'frighten', size: 2},
  {text: 'frightened', size: 2},
  {text: 'garden', size: 2},
  {text: 'gaze', size: 2},
  {text: 'glance', size: 2},
  {text: 'go along', size: 2},
  {text: 'grasp', size: 2},
  {text: 'grasping', size: 2},
  {text: 'great deal', size: 2},
  {text: 'hope', size: 2},
  {text: 'horse', size: 2},
  {text: 'humane', size: 2},
  {text: 'humility', size: 2},
  {text: 'impress', size: 2},
  {text: 'impressed', size: 2},
  {text: 'in no time', size: 2},
  {text: 'in other words', size: 2},
  {text: 'increase', size: 2},
  {text: 'inmate', size: 2},
  {text: 'inside', size: 2},
  {text: 'instead', size: 2},
  {text: 'interesting', size: 2},
  {text: 'interpose', size: 2},
  {text: 'ladle', size: 2},
  {text: 'lady', size: 2},
  {text: 'leaving', size: 2},
  {text: 'loud', size: 2},
  {text: 'mile', size: 2},
  {text: 'misery', size: 2},
  {text: 'nearly', size: 2},
  {text: 'necessary', size: 2},
  {text: 'notwithstanding', size: 2},
  {text: 'oakum', size: 2},
  {text: 'on the table', size: 2},
  {text: 'opened', size: 2},
  {text: 'overseer', size: 2},
  {text: 'philosopher', size: 2},
  {text: 'picking', size: 2},
  {text: 'piece', size: 2},
  {text: 'pillow', size: 2},
  {text: 'please', size: 2},
  {text: 'pocket', size: 2},
  {text: 'poor people', size: 2},
  {text: 'possessed', size: 2},
  {text: 'probable', size: 2},
  {text: 'proceed', size: 2},
  {text: 'produce', size: 2},
  {text: 'provide', size: 2},
  {text: 'putt', size: 2},
  {text: 'putting', size: 2},
  {text: 'red', size: 2},
  {text: 'relief', size: 2},
  {text: 'remain', size: 2},
  {text: 'repeat', size: 2},
  {text: 'result', size: 2},
  {text: 'reward', size: 2},
  {text: 'roll', size: 2},
  {text: 'rose', size: 2},
  {text: 'seat', size: 2},
  {text: 'sense', size: 2},
  {text: 'shaking', size: 2},
  {text: 'sight', size: 2},
  {text: 'situation', size: 2},
  {text: 'six', size: 2},
  {text: 'slice', size: 2},
  {text: 'society', size: 2},
  {text: 'spoke', size: 2},
  {text: 'start', size: 2},
  {text: 'starve', size: 2},
  {text: 'starved', size: 2},
  {text: 'station', size: 2},
  {text: 'stop', size: 2},
  {text: 'stranger', size: 2},
  {text: 'suffer', size: 2},
  {text: 'supply', size: 2},
  {text: 'support', size: 2},
  {text: 'suppose', size: 2},
  {text: 'take care', size: 2},
  {text: 'taking', size: 2},
  {text: 'talk', size: 2},
  {text: 'tap', size: 2},
  {text: 'teach', size: 2},
  {text: 'tear', size: 2},
  {text: 'tears', size: 2},
  {text: 'telling', size: 2},
  {text: 'to that', size: 2},
  {text: 'tone', size: 2},
  {text: 'too much', size: 2},
  {text: 'town', size: 2},
  {text: 'trade', size: 2},
  {text: 'treat', size: 2},
  {text: 'trouble', size: 2},
  {text: 'useful', size: 2},
  {text: 'usher', size: 2},
  {text: 'view', size: 2},
  {text: 'walk in', size: 2},
  {text: 'warden', size: 2},
  {text: 'wicket', size: 2},
  {text: 'wild', size: 2},
  {text: 'wisdom', size: 2},
  {text: 'wretched', size: 2},
  {text: 'young woman', size: 2},
  {text: 'Oliver', size: 1},
  {text: 'a couple of', size: 1},
  {text: 'accurate', size: 1},
  {text: 'address', size: 1},
  {text: 'advertise', size: 1},
  {text: 'affect', size: 1},
  {text: 'affected', size: 1},
  {text: 'affix', size: 1},
  {text: 'agony', size: 1},
  {text: 'aim', size: 1},
  {text: 'alarm', size: 1},
  {text: 'alarmed', size: 1},
  {text: 'alive', size: 1},
  {text: 'all over', size: 1},
  {text: 'all the way', size: 1},
  {text: 'allot', size: 1},
  {text: 'allotted', size: 1},
  {text: 'aloud', size: 1},
  {text: 'alphabet', size: 1},
  {text: 'alphabetical', size: 1},
  {text: 'alternately', size: 1},
  {text: 'alternative', size: 1},
  {text: 'anciently', size: 1},
  {text: 'animate', size: 1},
  {text: 'animated', size: 1},
  {text: 'anxious', size: 1},
  {text: 'apparently', size: 1},
  {text: 'apparition', size: 1},
  {text: 'appendage', size: 1},
  {text: 'appetite', size: 1},
  {text: 'applicant', size: 1},
  {text: 'applied', size: 1},
  {text: 'apply', size: 1},
  {text: 'apprentice', size: 1},
  {text: 'approach', size: 1},
  {text: 'approaching', size: 1},
  {text: 'appropriate', size: 1},
  {text: 'approvingly', size: 1},
  {text: 'arrive at', size: 1},
  {text: 'articulate', size: 1},
  {text: 'articulated', size: 1},
  {text: 'as it is', size: 1},
  {text: 'assiduously', size: 1},
  {text: 'assigned', size: 1},
  {text: 'assist', size: 1},
  {text: 'assisted', size: 1},
  {text: 'astound', size: 1},
  {text: 'astounded', size: 1},
  {text: 'at length', size: 1},
  {text: 'atrociously', size: 1},
  {text: 'attended', size: 1},
  {text: 'attending', size: 1},
  {text: 'attribute', size: 1},
  {text: 'awaken', size: 1},
  {text: 'bachelor', size: 1},
  {text: 'badge', size: 1},
  {text: 'bait', size: 1},
  {text: 'balance', size: 1},
  {text: 'baptize', size: 1},
  {text: 'baptized', size: 1},
  {text: 'Beadle', size: 1},
  {text: 'beer', size: 1},
  {text: 'befall', size: 1},
  {text: 'beg', size: 1},
  {text: 'beggar', size: 1},
  {text: 'behold', size: 1},
  {text: 'benevolent', size: 1},
  {text: 'bestow', size: 1},
  {text: 'bid', size: 1},
  {text: 'bidding', size: 1},
  {text: 'biography', size: 1},
  {text: 'bitterly', size: 1},
  {text: 'blandness', size: 1},
  {text: 'blanket', size: 1},
  {text: 'blessed', size: 1},
  {text: 'blessing', size: 1},
  {text: 'blow', size: 1},
  {text: 'bolt', size: 1},
  {text: 'bosom', size: 1},
  {text: 'branch', size: 1},
  {text: 'brat', size: 1},
  {text: 'bread and butter', size: 1},
  {text: 'breakfast', size: 1},
  {text: 'breathe', size: 1},
  {text: 'breathed', size: 1},
  {text: 'brown', size: 1},
  {text: 'brush', size: 1},
  {text: 'brushed', size: 1},
  {text: 'buffet', size: 1},
  {text: 'buffeted', size: 1},
  {text: 'build', size: 1},
  {text: 'burden', size: 1},
  {text: 'burst', size: 1},
  {text: 'butter', size: 1},
  {text: 'by hand', size: 1},
  {text: 'by no means', size: 1},
  {text: 'calico', size: 1},
  {text: 'calling', size: 1},
  {text: 'calm', size: 1},
  {text: 'cap', size: 1},
  {text: 'capital', size: 1},
  {text: 'captivate', size: 1},
  {text: 'captivating', size: 1},
  {text: 'careful', size: 1},
  {text: 'carelessly', size: 1},
  {text: 'catch sight', size: 1},
  {text: 'catch up', size: 1},
  {text: 'catching', size: 1},
  {text: 'cellar', size: 1},
  {text: 'chafe', size: 1},
  {text: 'chafed', size: 1},
  {text: 'check', size: 1},
  {text: 'checked', size: 1},
  {text: 'cheerfulness', size: 1},
  {text: 'childish', size: 1},
  {text: 'choleric', size: 1},
  {text: 'circumference', size: 1},
  {text: 'clean', size: 1},
  {text: 'clearly', size: 1},
  {text: 'cling', size: 1},
  {text: 'cloth', size: 1},
  {text: 'clothes', size: 1},
  {text: 'clothing', size: 1},
  {text: 'coal', size: 1},
  {text: 'coat', size: 1},
  {text: 'cold water', size: 1},
  {text: 'combination', size: 1},
  {text: 'come on', size: 1},
  {text: 'come out', size: 1},
  {text: 'comfort', size: 1},
  {text: 'comfortable', size: 1},
  {text: 'Commons', size: 1},
  {text: 'commons', size: 1},
  {text: 'compelling', size: 1},
  {text: 'complacently', size: 1},
  {text: 'completed', size: 1},
  {text: 'compliment', size: 1},
  {text: 'composed', size: 1},
  {text: 'composition', size: 1},
  {text: 'comprise', size: 1},
  {text: 'concise', size: 1},
  {text: 'conclave', size: 1},
  {text: 'confinement', size: 1},
  {text: 'consideration', size: 1},
  {text: 'consign', size: 1},
  {text: 'consolatory', size: 1},
  {text: 'contents', size: 1}
  
];