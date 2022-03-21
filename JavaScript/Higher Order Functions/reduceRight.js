const arr = [2, 3, 4, 5, 6];

let sum = arr.reduceRight((acc, ele) => acc + ele, 0);
console.log(sum);