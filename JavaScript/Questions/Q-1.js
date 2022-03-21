//Get the products whose price is at least 100

const products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 },
];


let productsAbove100 = products.map(obj => obj.price).
    filter(price => price >= 100);

console.log(productsAbove100);