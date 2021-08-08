console.log('============ Iteration An Array ============');

const cars = ['Audi', 'BMW', 'Marcedes'];
for (let car of cars)
    console.log(car);

cars.forEach((car, index) => console.log(index, car));


