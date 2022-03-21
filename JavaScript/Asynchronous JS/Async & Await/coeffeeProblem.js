function placeOrder(drink) {

    const promise = new Promise((resolve, reject) => {

        if (drink == 'coeffee')
            resolve('Order for coeffee');

        else
            reject('Order cannot be placed');
    });

    return promise;
}

function processOrder(order) {

    const promise = new Promise((resolve) => {

        console.log("Order is being processed ");
        resolve(`${order} served`);
    });

    return promise;
}

let drink = 'Banana';

// -> Promisified Solution
// const pr = placeOrder(drink);
// pr.then(demand => {

//     console.log(demand);
//     const pr2 = processOrder(demand);
//     pr2.then(msg => console.log(msg));

// }).catch(err => console.log(err));

// -> Async Await Solution
async function serveOrder() {

    let orderPlaced = await placeOrder(drink);
    console.log(orderPlaced);

    let processedOrder = processOrder(orderPlaced);
    console.log(processOrder);
}