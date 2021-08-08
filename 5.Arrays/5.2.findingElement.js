console.log('============ Finding an Element from an array ============');

const color = ['red', 'black', 'blue', 'black', 'blue', 'black'];

// Find Element
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);
console.log(color[3]);
console.log(color[4]);
console.log(color[5]);


// Find index of an element
console.log(color.indexOf('red'));
console.log(color.indexOf('black'));
console.log(color.indexOf('blue'));

console.log(color.indexOf('yellow'));

console.log(color.indexOf('blue', 0));


// Element is present or not
console.log(color.includes('red'));
console.log(color.includes('yellow'));

// Find last index of an element
console.log(color.lastIndexOf('blue'));




//array of object
const courses = [
    {c_id: 1 , c_name: 'c'}, 
    {c_id: 2 , c_name: 'c++'},
    {c_id: 3 , c_name: 'java'}
];
let found = courses.find(function (course) {
    return course.c_name === 'c++';
});
console.log(found);


for (let key of courses) {
    found = courses.find(function (course) {
        return course.c_id === key.c_id;
    });
    console.log(found);
}