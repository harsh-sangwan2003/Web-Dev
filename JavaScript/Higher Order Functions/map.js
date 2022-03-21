/*
Higher Order Functions are those functions which accepts another function as an argument or returns a function.
Higher Order Functions do not modify the actual array
*/

let arr = [2, 5, 9, 8, 15, 11, 6];

//Ployfills - When we create our custom higher order functions

// arr.map is a higher order function
// Take a callback function as an argument
// Iterate over all the elements and perform the operation based on callback fn
// Returns a new array

let sqArr = arr.map((ele) => ele * ele);
console.log(sqArr);

let nameArr = ['Mrinal', 'Harsh', 'Utkarsh'];

let nameArr2 = nameArr.map(

    function (ele) {
        return ele;
    }
)

console.log(nameArr2);

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const factor = 74;

let usd = transactions.map(ele => (ele / factor).toFixed(2));
console.log(usd);