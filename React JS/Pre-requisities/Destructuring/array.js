let arr = ["Hi", "I", "am", "Mrinal"];

let [a, b, c, d] = arr;
console.log(a, b, c, d);

let [e, f, , g] = arr;
console.log(e, f, g);

let [x, y, z, w, p = "Bye"] = arr;
console.log(x, y, z, w, p); 