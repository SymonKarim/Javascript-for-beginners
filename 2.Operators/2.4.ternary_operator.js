console.log('============ Ternary Operator ============');

// If a customer has more than 100 points, then they are a 'gold' customer, otherwise, they are a 'silver' customer.
let point = 102;
console.log(point > 101 ? 'Gold Customer' : 'Silver Customer');
console.log(point > 99 ? 'Gold Customer' : 'Silver Customer');

let customer_type = point > 105 ? 'Gold' : 'Silver';
console.log(customer_type);