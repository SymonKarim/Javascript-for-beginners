console.log('============ For IN Loop ============');
/**Using For..In..Loop
 * Iterate Over item
 * in an oject */

const person = {
    name: 'Jahid',
    age: 22,
    gender: 'male'
}
console.log(person);
for (let key in person) {
    console.log(key, ':', person[key]);
}

const colors = ['red', 'green', 'blue'];
console.log(colors);
for (let index in colors) {
    console.log(index, colors[index]);
}
