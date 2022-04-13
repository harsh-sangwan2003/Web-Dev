let arr = [10, 2, 30, 4];
//Deep copy
let arr2 = arr;

arr.push(440);
console.log(arr);
console.log(arr2);

//Shallow copy
let arr3 = [...arr];

arr.push(230);
console.log(arr);
console.log(arr3);