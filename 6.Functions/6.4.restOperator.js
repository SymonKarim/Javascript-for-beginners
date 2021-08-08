console.log('============ Rest Operator ============');

function Sum(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(Sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


function priceCalculation(discount,...prices) {
    let totalCost = prices.reduce((a, b) => a + b);
    let payAble = totalCost * (1 - discount);
    return payAble;
}
console.log(priceCalculation(0.1, 10, 20, 30, 40, 50));