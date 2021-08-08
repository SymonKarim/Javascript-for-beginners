console.log('============ Logical Operators ============');

// --------------- Logical AND (&&) ---------------
console.log(true && true);       // T
console.log(false && true);      // F
console.log(true && false);      // F
console.log(false && false);     // F

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible For Loan : ' + eligibleForLoan);    // T

highIncome = false;
goodCreditScore = true;
eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible For Loan : ' + eligibleForLoan);    // F




// --------------- Logical OR (||) --------------- 
console.log(true || true);       // T
console.log(false || true);      // T
console.log(true || false);      // T
console.log(false || false);     // F

highIncome = true;
goodCreditScore = true;
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible For Loan : ' + eligibleForLoan);    // T

highIncome = false;
goodCreditScore = true;
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible For Loan : ' + eligibleForLoan);    // T



// --------------- Logical NOT (!) --------------- 
console.log(!true);       // F
console.log(!false);      // T

highIncome = false;
goodCreditScore = true;
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible For Loan : ' + eligibleForLoan);      // T
let applicationRefused = !eligibleForLoan;
console.log('Application Refused : ' + applicationRefused);      // F


highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible For Loan : ' + eligibleForLoan);      // F
applicationRefused = !eligibleForLoan;
console.log('Application Refused : ' + applicationRefused);   // T





// --------------------------------------------

let userColor = 'red';
let defaultColor = 'blue';
let currentcolor = userColor || defaultColor;
console.log(currentcolor); // red

userColor = '';
defaultColor = 'blue';
currentcolor = userColor || defaultColor;
console.log(currentcolor); // blue