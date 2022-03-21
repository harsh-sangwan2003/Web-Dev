// Execution Context - Environment where JS code is executed and evaluated
// Global Execution Context - By default an execution context is provided by JS known as Global Execution Context where the whole code will reside


var a = 2;
var b = 3;

function add(m, n) {

    var sum = m + n;
    return sum;
}

var sum1 = add(1, 2);
var sum2 = add(a, b);

console.log(sum1); //3
console.log(sum2); //5