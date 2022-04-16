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

//Deep copy
let obj2 = obj;

//Shallow copying object's properties
// let obj3 = { ...obj, address: { ...obj.address, state: { ...obj.address.state } } };
let obj3 = JSON.parse(JSON.stringify(obj));

obj.name = 'Mark';
obj.address.country = 'India';
obj.address.state.stateName = 'Delhi';

console.log(obj2);
console.log(obj3);