console.log(this); //window

function test() {

    console.log(this); //window
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

            console.log(this); //window
        }

        return fn2;
    }
};
obj.greet();
obj.fn()();