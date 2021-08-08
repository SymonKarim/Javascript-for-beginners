console.log('============ Every and Some Method ============');

/**if all valid with condition
 * then every method returns true
 * else false
 * 
 * 
 * if at least one valid with condition
 * then some method returns true
 * else false
 */

// Every
let number_arr = [1, 2, 3, 4, 5, 6];
let allPositive = number_arr.every(value => value > 0);
console.log(allPositive);

number_arr.push(-1, -2);
allPositive = number_arr.every(value => value > 0);
console.log(allPositive);

console.log(number_arr);


// Some
number_arr = [1, 2, 3, 4, 5, 6];
let atLeastOnePositive = number_arr.some(value => value > 0);
console.log(atLeastOnePositive);

number_arr.push(-1, -2);
atLeastOnePositive = number_arr.some(value => value > 0);
console.log(atLeastOnePositive);

console.log(number_arr);