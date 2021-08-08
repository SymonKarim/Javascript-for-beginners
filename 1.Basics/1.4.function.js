console.log('============ Function ============');

// ------------------- Function 1 -------------------
function sayHello() {
    console.log('Hello!');
}

sayHello();


// ------------------- Function 2 ------------------- 
function sayHello2(name) {
    console.log('Hello' + ' ' + name);
    console.log(`hello ${name}`);//best practices
}

sayHello2('Jahid');
sayHello2('Hasib');


// ------------------- Function 3 ------------------- 
function sayFullName(fname,lname) {
    console.log('Hello' + ' ' + fname + ' ' + lname);
    console.log(`hello ${fname} ${lname}`); //formatted string
}

sayFullName('Jahid','Hossain');
sayFullName('Hasib','Hossain');


// ------------------- Function 4 ------------------- 
function sum(number1,number2) {
    let result = parseInt(number1 + number2);
    console.log('Sum is : ' + result);
}

sum(10,5.55);
sum(50,100);


// ------------------- Function 5 ------------------- 
function multi(number1,number2) {
    let result = parseFloat(number1 * number2);
    console.log('Multiplication : ' + result);
}

multi(10.3,5);
multi(50,100);


// ------------------- Function 6 ------------------- 
function square(number) {
    return number * number;
}

console.log(square(5));
console.log(square(10));

let number = square(5);
console.log(number);

function fac(num){
    if (num === 0) return 1;
    return num * fac(num - 1);
}
console.log(fac(6) % 100);
let a =  10 + '10' ;
console.log(a)

function sss(num) {
    return true &&  num && false
}
console.log(sss('5'));

const person3 = {
    fullname: ["Symon", "jahid", "hasan ", "karim"],
    age: 22,
    hobby: ["Fishing","Watching sports","travelling"]
}
console.log(person3);

console.table(person3)
console.log(Object.keys(person3).length) === 3 ?  console.log(1) : console.log(0);
