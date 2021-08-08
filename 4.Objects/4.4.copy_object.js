console.log('============ Copy Object============');


const dog = {
    leg: 4,
    name: 'tommy',
    bark() {
        console.log('Bark');
    }
};

// Method 1
const dog1 = {};
for (let key in dog) {
    dog1[key] = dog[key];
}
console.log(dog1);

// Method 2
const dog2 = Object.assign({}, dog);
console.log(dog2);

// Method 3
const dog3 = { ...dog };
console.log(dog3);


