// In JS objects are in key and value pair

//Object literal
let obj = {};

let person = {

    name: 'Amit',
    age: 19,
    phone: 8888
};

console.log(obj);
console.log(person);

let cap = {

    firstName: "Steve",
    lastName: "Rogers",
    friends: ['Bucky', 'Tony', 'Dr Banner'],
    age: 102,
    isAvenger: true,
    address: {

        state: 'Manhattan',
        city: 'New York'
    },
    sayHi: function fn() {

        console.log("Captain says Hi");
    }
};

console.log(cap.firstName);

console.log(cap['lastName']);

console.log(cap.friends[2]);

console.log(cap.address.city);

//loop - for in loop
for (let key in cap) {

    console.log("Key : ", key, "Value : ", cap[key]);
}

//Update property of an object
cap.isAvenger = false;

//Add new property
cap.movies = ['Age Of Ultron', 'First Avenger'];

//Delete a property
delete cap.age;

console.log(cap);
