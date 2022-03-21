//Empty Object -> {}
console.log(this);

function test() {

    //Global Object
    console.log(this);
}

test();

let obj = {

    //prints the object itself
    fn: function () { console.log(this) }
}
obj.fn();


let obj2 = {

    name: "Harsh",
    f: function () {

        function g() {

            //Global Object
            console.log(this);
        }
        g();
    }
}
obj2.f();