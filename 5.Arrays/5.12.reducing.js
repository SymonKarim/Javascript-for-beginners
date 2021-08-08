console.log('============ Reducing an Array ============');

const Number = [1, 2, 3, 4, 5];
let sum = 0;
for (const i of Number) {
    sum += i;
}
console.log("Sum : " + sum);


let Sum = Number.reduce((accumulate, CurrentValue) => {
    return accumulate + CurrentValue;
}, 0);
console.log("SUM : " + Sum);