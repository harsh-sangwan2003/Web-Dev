// let car1 = {

//     name:'BMW',
//     model:'X6',
//     color:'Blue'
// }

// let car2 = {

//     name:'Mercedes',
//     model:'S-class',
//     color:'Red'
// }
// function car(name, color, model) {

//     console.log(this);

//     this.name = name;
//     this.color = color;
//     this.model = model;

//     this.display = () => {

//         console.log("I am driving a " + this.name);
//     }

//     console.log(this);
// }

// let car1 = new car('BMW', 'White', 'X-6');
// let car2 = new car('Mercedes', 'Black', 'S-class');

// console.log(car);
// console.log(car1);
// console.log(car2);

// car1.display();

class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;
    }
}

let p1 = new Person('Harsh', 19);
console.log(p1);
console.log(typeof Person);u