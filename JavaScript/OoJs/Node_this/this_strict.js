'use strict'

//Empty Object -> {}
console.log(this);

function test() {

    //undefined
    console.log(this);
}

test();

let obj = {

    name: 'Harsh',
    //prints the object itself
    fn: function () { console.log(this) }
}
obj.fn();


let obj2 = {

    name: "Harsh",
    f: function () {

        function g() {

            //undefined
            console.log(this);
        }
        g();
    }
}
obj2.f();