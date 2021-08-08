console.log('============ Hoisting ============');

// Before calling the function declaration first

// walk(); ---> OK
function go() {
    console.log('Go');
}

// run(); ---> ERROR
let run = function() {
    console.log('Run');
}

go();
run();
