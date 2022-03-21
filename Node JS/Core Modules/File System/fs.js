// File System Module

// ******files******

const fs = require('fs');

// Reading a file
let content = fs.readFileSync('test.txt');
console.log(content.toString());

// Writing content in a file
fs.writeFileSync('test2.txt', 'Hi, I am test2.js!!!');

// If the file name passed doesn't exist, then a new file is created and content will be written
fs.writeFileSync('test3.txt', 'Hi, I am test3.js!!!');

// Append data in a file
fs.appendFileSync('test3.txt', " Appending new data");

// Deleting a file
fs.unlinkSync('test3.txt');


// ******Directories******

// //Create a new directory
fs.mkdirSync('newDirectory');
console.log("Directory created");

//Remove a directory
fs.rmdirSync('newDirectory');
console.log("Directory deleted");

// Check whether the directory exists or not
let flag = fs.existsSync('newDirectory');
console.log(flag);

//Stats of a directory
let dirStats = fs.lstatSync('newDirectory');
console.log(dirStats);

console.log(dirStats.isFile());
console.log(dirStats.isDirectory());

// Reading a directory
let dirPath = "C://Users//asang//Desktop//Harsh//Pepcoding//Web Dev//Web-Dev//Node JS//Class - 10//Operating System";
let dirContent = fs.readdirSync(dirPath);
console.log(dirContent);