//filter - returns a new array of elements matching the specified condition

let arr = [2, 3, 5, 7, 9, 11, 13, 12, 18];

let even = arr.filter(ele => (ele % 2 == 0));
console.log(even);

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const profit = transactions.filter(ele => ele > 0);
console.log(profit);