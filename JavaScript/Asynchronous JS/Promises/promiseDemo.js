const fs = require('fs');

console.log("Before");

// fs.readFile('f1.txt', (err, buffer) => {

//     if (err)
//         console.error("Error is: ", err);

//     else
//         console.log(buffer.toString());
// })


const promise = fs.promises.readFile('f1.txt');

console.log(promise);

promise.then(data => console.log("Data is: ", data.toString())).
    catch(err => console.log("Error is: ", err));

console.log(promise);

console.log("After");