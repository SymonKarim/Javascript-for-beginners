console.log('============ Sort Array ============');

// Sort String Array
const animal = ['cat', 'dog', 'hen', 'cow'];
animal.sort();
console.log(animal);


// Sort Number Array
const item = [15, 3, 2, 1, 4];
item.sort((a,b) => a>b);
console.log(item);

item.sort( (a,b) => a<b );
console.log(item);


// Sort Array Of Object
const course = [
    { id: 1, name: 'c' },
    { id: 2, name: 'js' },
    { id: 3, name: 'c#' }
];
course.sort( (a , b) => a.name < b.name );
console.log(course);
