console.log('============ Adding Element into an array ============');

let numbers = [3, 4, 5];
console.log(numbers);

// End
numbers.push(7, 8);
console.log(numbers);
// Start
numbers.unshift(1, 2);
console.log(numbers);

// Mid
numbers.splice(2, 4, 'a', 'b', 'c',false, true);
console.log(numbers);

