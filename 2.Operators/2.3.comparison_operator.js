console.log('============ Comparison Operators ============');

let val = 1;

// ----------- Relational Operator ----------- 
console.log(val > 0);       //  T
console.log(val >= 0);      //  T
console.log(val < 0);       //  F
console.log(val <= 0);      //  F







// ----------- Equality Operator ----------- 
//  ----------- Lose Equality ---> (Value) ----------- 
console.log(val == 1);       //  T
console.log(val != 1);       //  F

console.log(1 == 1);         //  T
console.log('1' == 1);       //  T
console.log(true == 1);      //  T



// ----------- Strict Equality ---> (Type + Value) ----------- 
console.log(val === 1);      //  T
console.log(val !== 1);      //  F

console.log(1 === 1);        //  T
console.log('1' === 1);      //  F
console.log(true === 1);     //  F


