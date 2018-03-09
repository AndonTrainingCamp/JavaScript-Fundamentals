/*jslint devel: true */
/*jslint es6 */
'use strict';
const peopleInput = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 18 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 18 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

function checkAdult(el) {
    return el.age >= 18;
}
console.log(peopleInput.every(checkAdult));
