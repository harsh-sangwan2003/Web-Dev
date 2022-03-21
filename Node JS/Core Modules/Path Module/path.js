const path = require('path');

// Extension name
let src = 'C://Users//asang//Desktop//Harsh//Pepcoding//Web Dev//Web-Dev//Node JS//Class - 11//File System//dir-1//file.txt';
const ext = path.extname(src);
console.log(ext);

// Basename
const baseName = path.basename(src);

console.log(__dirname);
console.log(__filename);