const fs = require('fs');

const fp1 = fs.promises.readFile('f1.txt');

const fp2 = fs.promises.readFile('f2.txt');

const fp3 = fs.promises.readFile('f3.txt');

function cb(data) {

    console.log("Data is -> ", data.toString());
}

fp1.then(cb);

fp2.then(cb);

fp3.then(cb);