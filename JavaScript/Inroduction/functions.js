//Function declrartion
// function sayHi() {

//     console.log("Function said hi!");
// }
// sayHi();

//Parameters in function 
// a & b are parameters
function add(a, b) {
    console.log("The addition is: ", a + b);
}
add(2, 3); //2 and 3 are arguments

function sub(a, b) {

    console.log("The difference is: ", a - b);
}
sub(10, 5);

function multiply(a, b) {

    console.log("The product is: ", a * b);
}
multiply(2, 4);

function division(a, b) {

    console.log("Division is: ", a / b);
}
division(10, 2);

// Functions are called as first class citizens 
// JS doesn't differntiate b/w variables and functions
// Anonymous function
let sayHi = function () {

    console.log("Function said hi!");
}
sayHi();