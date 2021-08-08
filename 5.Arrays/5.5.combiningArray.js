console.log('============ Combining Array ============');

const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];

const combine = arr1.concat(arr2);
console.log(combine);

const slice_arr1 = combine.slice();
console.log(slice_arr1);

const slice_arr2 = combine.slice(2);
console.log(slice_arr2);

const slice_arr3 = combine.slice(2,5);
console.log(slice_arr3);



// Combining two array using spread operator
const color1 = ['red', 'blue', 'black'];
const color2 = ['green', 'skyblue', 'yellow'];
const copy = [...color1, ...color2];
const new_color = ['white',...copy,'magenta']

console.log(color1);
console.log(color2);
console.log(copy);
console.log(new_color);