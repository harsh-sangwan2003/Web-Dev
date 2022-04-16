console.log(this); //Empty Object

function test() {

    console.log(this); //Global Object
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

            console.log(this); //Global Object
        }

        return fn2;
    }
};
obj.greet();
obj.fn()();