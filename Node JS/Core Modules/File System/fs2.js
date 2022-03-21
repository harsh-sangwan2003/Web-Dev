const path = require('path');
const fs = require('fs');

let srcPath = 'C://Users//asang//Desktop//Harsh//Pepcoding//Web Dev//Web-Dev//Node JS//Class - 11//File System//dir-1//file.txt';
let destPath = 'C://Users//asang//Desktop//Harsh//Pepcoding//Web Dev//Web-Dev//Node JS//Class - 11//File System//dir-2';
let fileName = path.basename(srcPath);
let destination = path.join(destPath, fileName);

fs.copyFileSync(srcPath, destination);
console.log("File copied!");