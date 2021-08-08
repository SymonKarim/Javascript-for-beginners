console.log('============ Objects ============');

// Object Literal

console.log('-------- Starting From Object.js File --------');

let person = {
    personName: 'Symon',
    personAge: 22
};
person.personName = 'Symon karim';     // Dot Notation
person['personName'] = 'symon';  // Bracket Notation
// person["personAge"] = 'jahid' // We can also use double quote 

person.personAge = 20;
console.log(person); //printing all the attributes of person object
console.log(person.personName);
console.log(person.personAge);

//another object car
const car = {
    wheels: 4,
    color: 'red',
    isAirConditioned: true,
};
car.price = 2000;
console.log(car); //printing all the attributes of car object
car.price = 2500;
car.wheels = 8;
car.color = 'black';
car.isAirConditioned = false;

console.log(car);
const bike = {
    name : "Pulser",
    price : 175000,
    model: "2021 edition",
    madein: "India"
    //First one is key : senond one is value
}
bike.name = "Yamaha FTR";
console.log(bike);