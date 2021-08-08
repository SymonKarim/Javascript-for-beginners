console.log('============ Objects Basic ============');

let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isValid: true,
    draw: function() {
        console.log('Draw');
    },
    move: function () {
        console.log('Move');
    },
    go() {
        console.log('Go');
    }
};

console.log('Radius ', circle.radius);

console.log('Location ',circle.location);
console.log('Location X ',circle.location.x);
console.log('Location Y ', circle.location.y);

console.log(circle.isValid);

circle.draw();
circle.move();
circle.go();

