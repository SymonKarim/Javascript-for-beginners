console.log('============ Filter Method ============');

/**if filter method is true
 * then make like a new array
 */

const opneTime = [1, 2, 3, 4, 5];
const open = opneTime.filter(time => time > 3 || time < 3);
console.log(open);



const price = [100, 50, 200, 700, 500, 300, 1000];
const filterRange = price.filter(range => range >= 500);
console.log(filterRange);