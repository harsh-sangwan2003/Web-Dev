//finds and returns the first element of the array which satisfied the condition

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const firstWithdrawl = transactions.find(ele => ele < 0);
console.log(firstWithdrawl);