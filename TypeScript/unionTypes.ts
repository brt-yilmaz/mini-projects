let age: number | string = '34';
age = 34;

// you can do type narrowing with if/else or ternary 

const usersAgeMix:(number|string)[] = ['23',12];
const usersAgeNumberOrString: number[]|string[] = [2,4,5] // or ['24','43', '53']

// Literal Type
let answer:'no' | 'yes' | ' who knows';
answer = ' who knows';
answer = 'no';
answer= 'yes'  // you can assign only these three values.

