const fs = require('fs');

console.log("Before");

fs.readFile('f1.txt', cb1);

function cb1(err, data) {

    if (err)
        console.log("Error is: ", err);

    else {

        console.log("F1 data is: ", data.toString());

        fs.readFile('f2.txt', cb2);
    }
}

function cb2(err, data) {

    if (err)
        console.log("Error is: ", err);

    else {

        console.log("F2 data is: ", data.toString());

        fs.readFile('f3.txt', cb3);
    }
}

function cb3(err, data) {

    if (err)
        console.log("Error is: ", err);

    else {

        console.log("F3 data is: ", data.toString());
    }
}

console.log("After");