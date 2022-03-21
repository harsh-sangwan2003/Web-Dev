const promise = new Promise((resolve, reject) => {

    let a = 'pepcoders';
    let b = 'pepcoder';

    //resolve is linked with then
    if (a === b)
        resolve('Equal');

    //reject is linked with catch
    else
        reject('Not equal');
});

console.log("Before");

promise.then((data) => console.log(data))
    .catch((err) => console.log(err));

console.log("After");