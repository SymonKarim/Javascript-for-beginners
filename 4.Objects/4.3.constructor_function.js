console.log('============ Constructor Function ============');

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw');
    }
}

let circle_1 = new Circle(3);
console.log(circle_1);



