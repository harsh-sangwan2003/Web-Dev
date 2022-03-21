//Array is an ordered collection of elements

//Array declaration
let arr = [];

//Array initialisation
arr = ["Ferrari", "BMW", "Audi", "Bugatti"];
console.log(arr);

//Accessing the elements of array
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[6]); //undefined

//Replacing the array element
// Middle elements will be undefined/empty
arr[6] = "Koenigsegg";
console.log(arr);

//Array Methods - 

//Length of the array
console.log(arr.length);

//Removes element from the end
arr.pop();
console.log(arr);

//Add element at the end
arr.push("Merscedes");
console.log(arr);

// Removes element from the beginning
arr.shift();
console.log(arr);

//Add element in the beginning
arr.unshift('Aston Martin');
console.log(arr);

//Removes elements from the array
arr.splice(1, 7);
console.log(arr);

//Multidimensional array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[2][2]);