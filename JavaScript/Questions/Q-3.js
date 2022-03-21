//You have to use map 
//You have to use map function and have to get all the students name in upperCase
//Map Question


//Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord 
//use filter method to approach the problem
let studentRecords = [{ name: 'Abhishek', id: 123, marks: 98 },
{ name: 'Udai', id: 101, marks: 90 },
{ name: 'Himanshu', id: 200, marks: 96 },
{ name: 'Mrinal', id: 115, marks: 75 }]

//Sol-1
let upperCaseNames = studentRecords.map(obj => obj.name.toUpperCase());
console.log(upperCaseNames);

//Sol-2
let details = studentRecords.filter(obj => obj.marks > 50 && obj.id > 120);
console.log(details);