setTimeout(function (name) {

    console.log("I will run after 3 sec.");
    console.log(name);

}, 3000, 'Harsh');

//Halt the program using clearInterval
// setInterval(function () {

//     console.log("I will run after every 2 sec.")
// }, 2000);

// let count = 0;

// let interval = setInterval(function () {

//     count++;
//     console.log(count);

//     if (count == 5)
//         clearInterval(interval);

// }, 2000);