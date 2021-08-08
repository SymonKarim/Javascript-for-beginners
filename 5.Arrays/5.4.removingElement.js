console.log('============ Remove Element From An Array ============');

const roll = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// End
const last = roll.pop();
console.log(last);
console.log(roll); 

// Start
const first = roll.shift();
console.log(first);
console.log(roll);

// Mid
const any = roll.splice(2, 3);
console.log(any);
console.log(roll);

// Remove all element from array
let another1 = roll;
console.log(another1);
another1 = [];
console.log(another1);

let another2 = roll;
console.log(another2);
another2.length = 0;
console.log(another2);

let another3 = roll;
console.log(another3);
another3.splice(0,another3.length);
console.log(another3);
