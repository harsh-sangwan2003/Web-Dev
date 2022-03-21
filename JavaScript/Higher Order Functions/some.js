//returns true of 1 ore more than 1 elements satisfies the given condition

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let anyDeposit = transactions.some(ele => ele > 0);
console.log(anyDeposit);