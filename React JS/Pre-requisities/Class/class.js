class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {

    constructor(name, age, classStrength) {

        super(name, age);
        this.classStrength = classStrength;
    }
}

class Student extends Person {

    constructor(name, age, cgpa) {

        super(name, age);
        this.cgpa = cgpa;
    }
}

let p1 = new Person('Steve', 30);
console.log(p1);

let t1 = new Teacher('Adam', 19, 100);
console.log(t1);

let s1 = new Person('Samay', 20, 8.5);
console.log(s1);
