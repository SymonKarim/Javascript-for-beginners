console.log('============ Arguments ============');

function sum() {
    console.log(arguments);
    let total = 0;
    for (const value of arguments) 
        total += value;
    return total;
}

console.log(sum(1, 2, 33, 3, 4, 5, 10));



