//A function passed as an argument to another function is called as a callback function

function printName(firstName, cb) {

    console.log(firstName);
    cb('Yadav');
}

function printLastName(lastName) {

    console.log(lastName);
}

printName('Sashikant', printLastName);