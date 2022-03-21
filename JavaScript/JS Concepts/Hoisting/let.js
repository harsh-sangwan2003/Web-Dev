// TDZ is an area where if we try to access variables before initialisation defined with let and const we will get an error

console.log(a);

let a = 2;

greet();

function greet() {

    console.log("Hello");
}

// console.log(a);

// let a = 2;

// greet();

// function greet() {

//     console.log("Hi! I am fn 'a' ", a);
// }