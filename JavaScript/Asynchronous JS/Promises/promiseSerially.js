const fs = require('fs');

console.log("Before");

let f1p = fs.promises.readFile('f1.txt');

f1p.then(cb).then(cb2).then(cb3).catch(err => {

    console.log("Error is: ", err);
});

function cb(data) {

    console.log("F1 Data is: ", data.toString());

    let f2p = fs.promises.readFile('f2.txt');

    return f2p;
}

function cb2(data) {

    console.log("F2 Data is: ", data.toString());

    let f3p = fs.promises.readFile('f3.txt');

    return f3p;
}

function cb3(data) {

    console.log("F3 Data is: ", data.toString());
}

// function cb(data) {

//     console.log("F1 Data is: ", data.toString());

//     let f2p = fs.promises.readFile('f2.txt');

//     f2p.then(cb2);
// }

// function cb2(data) {

//     console.log("F2 Data is: ", data.toString());

//     let f3p = fs.promises.readFile('f3.txt');

//     f3p.then(cb3);
// }

// function cb3(data) {

//     console.log("F3 Data is: ", data.toString());
// }

console.log("After");