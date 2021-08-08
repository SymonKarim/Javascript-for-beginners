console.log('============ Exercise ============');

// ============ Sum of some numbers ============
function SUM(...items) {
    return items.reduce((a, b) => a + b);
}
console.log(SUM(1, 2, 3, 4));


// ============ Sum of the element an array ============
function SUM_ARR(...items) {
    items = items[0];
    return items.reduce((a, b) => a + b);
}
console.log(SUM_ARR([1, 2, 3, 4]));


// ============ Area Of A Circle ============
const circle = {
    radius: 2,
    get Area() {
        return (Math.PI * this.radius * this.radius);
    }
};
circle.radius = 2;
console.log(circle.Area);


// ============ Error Handeling ============

function countOccurances(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid');
    return array.reduce((a, b) => {
        const occurances = (b === searchElement) ? 1 : 0;
        return a + occurances;
    }, 0);
}

try {
    const Number_1 = [1, 2, 1, 3, 4];
    const count = countOccurances("Number_1", 1);
    // const count = countOccurances(Number_1, 1);
    console.log(count);
}
catch (e) {
    console.log(e);
}