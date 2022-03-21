//String is a sequence of characters
let str = "Pepcoders";

//String methods - 

//Length of the string
console.log(str.length);

//Extracting a part of string
let slicedString = str.slice(3, 7);
console.log(slicedString);

// Substring
let sub = str.substr(3, 4);
console.log(sub);

// Replace
let string = "Hello Palak";
string.replace("Hello", "Bye");
console.log(string);

//Concatenation
let firstString = 'Hello';
let secondString = 'Amit';
console.log(firstString.concat(" " + secondString));


//Trim
let temp = '    Hello World  ';
console.log(temp.trim());
