console.log('============ Factory Function ============');

function createCircle(radius) {
    return {
        radius,
        draw() {
            return 'Draw';
        }
    };
}

let circle1 = createCircle(2);
console.log(circle1);
console.log(circle1.radius);
console.log(circle1.draw());

let circle2 = createCircle(5);
console.log(circle2);
console.log(circle2.radius);
console.log(circle2.draw());


