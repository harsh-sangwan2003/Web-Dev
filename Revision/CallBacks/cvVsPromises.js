const lib = require('./lib.js');

let amount = 2000;
const cut = 200;

// lib.updateAccount('Tv', chargeDebitCard);
lib.updateAccountPromise().then(() => {

    chargeDebitCard();
});

function chargeDebitCard() {

    amount = amount - cut;
    console.log("Remaining amount is: ", amount);
}