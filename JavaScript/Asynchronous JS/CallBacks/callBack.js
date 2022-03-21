// CallBack Function - Any function which is passed as an argument to another function 
function printFirstName(firstName, cb) {

    console.log(firstName);
    cb('Sachdeva');
}

function printLastName(lastName) {

    console.log(lastName);
}

printFirstName('Utsav', printLastName);

const fs = require('fs');


// Sync File Read
// console.log("Before");
// let data = fs.readFileSync('test.txt');
// console.log("Data is: ", data.toString());
// console.log("Done");


// Async File Read
console.log("Before");
fs.readFile('test.txt', cb);

function cb(err, data) {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
}

console.log("Done");

console.log("Before");
fs.readFile('test2.txt', cb2);

function cb2(err, data) {

    if (err)
        console.log(err);

    else
        console.log(data.toString());
}

console.log("Done");