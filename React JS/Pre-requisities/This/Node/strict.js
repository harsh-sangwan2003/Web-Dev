'use strict'
// a = 20; undefined

console.log(this); //Empty Object

function test() {

    console.log(this); //undefined
}

test();

let obj = {

    name: 'Ram',
    age: 23,

    greet: function () {

        console.log(this); //Same Object
    },
    fn: function () {

        function fn2() {

            console.log(this); //undefined
        }

        return fn2;
    }
};
obj.greet();
obj.fn()();