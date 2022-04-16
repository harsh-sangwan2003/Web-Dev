// let obj = {

//     name: 'Adam',
//     pincode: 123456,
//     state: {

//         stateName: 'New York'
//     }
// };

// let { name, state, pincode } = obj;

// console.log(name, state, pincode);

//Nested Objects - 
let obj = {

    name: 'Adam',
    address: {

        country: 'USA',
        state: {

            stateName: 'New York',
            pincode: 123456
        }
    }
};

let { name, address: { country }, address: { state: { pincode } } } = obj;
console.log(name, country, pincode);