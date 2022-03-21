// Js is dynamically typed language & data type is not specified here
// Variable declaration
// var, let and const

// varaible will be initialised with undefined 
var a;
console.log(a);

var a = 2;
console.log(a); //logs 2 in the terminal

a = 'I am a string now';
console.log(a);

var a = true;
console.log(a);

a = null;
console.log(a);



// var has some problems
//1. Redeclaration
//2. Scoping
var b = 'hello';
var b = 'hi';
console.log(b);

// Overcoming redeclaration
// use let keyword
let msg = 'hello' //cannot be redeclaraed
console.log(b);

if (10 % 2 == 0) {

    var a = 2; //var is function scoped
    console.log("I am from if block", a);
}

console.log("I am from outside if block", a);


// const
//re-declaration  and re-assigning is not allowed
const a = 'I am a string';