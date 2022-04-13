//Write a program to add two numbers using function expression
let add = function (a, b) {

    return a + b;
}

let res = add(10, 20);
console.log(res);

let regularFn = function () {

    console.log("I am an anonymous function");
}
regularFn();

let arrowFn = () => console.log("I am an arrow function");
arrowFn();

/*
Advantages of arrow functions -
1.Short syntax
2.Pure form of function
*/

let test = () => {

    console.log(this);
}

let test2 = function () {

    console.log(this);
}
test();
test2();

const obj = {

    name: 'Harsh',
    test1: () => console.log(this),
    test2: function () {

        console.log(this);

        let arrow = () => console.log(this);
        arrow();
    }

}
obj.test1();
obj.test2();