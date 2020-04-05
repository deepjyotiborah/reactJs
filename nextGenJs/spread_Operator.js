//Spread operator is used to split up array elements or object properties.
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers); // [ 1, 2, 3, 4 ]

const nos = [...numbers];
console.log(nos); // [ 1, 2, 3 ]

const person = {
    name : 'Deep',
    address: 'Bangalore'
};

const newPerson = {
    ...person,
    age: 30, address: 'Assam'
};
console.log(newPerson); { name: 'Deep', address: 'Assam', age: 30 }