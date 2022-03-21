//child_process is a node module to create sub-processes within a script

const cp = require('child_process');

console.log("Opening calculator");
cp.execSync('calc');
console.log("Calculator opened");

console.log("Trying to open VS code");
cp.execSync('code');
console.log("VS code opened");

console.log("Opening chrome");
cp.execSync('start chrome https://www.youtube.com');

let output = cp.execSync('node test.js');
console.log(output.toString());