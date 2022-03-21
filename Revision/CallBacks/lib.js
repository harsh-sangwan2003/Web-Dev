function updateAccount(product, cb) {

    setTimeout(function () {

        console.log(product + "purchased");
        cb();
    }, 2000);
}

function updateAccountPromise() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve();
        }, 2000);
    })
}

module.exports = { updateAccount, updateAccountPromise };