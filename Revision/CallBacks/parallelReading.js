const fs = require('fs');

//Synchronous way of reading file
console.log("Before");

let data = fs.readFileSync('f1.txt');

console.log("Data is: ", data.toString());

console.log("After");

// Asynchronous way of reading file

console.log("Before");

fs.readFile('f1.txt', cb);
function cb(err, data) {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Data is: ", data.toString());
}

fs.readFile('f2.txt', cb2);
function cb2(err, data) {

    if (err)
        console.log("Error is: ", err);


    else
        console.log("Data is: ", data.toString());
}