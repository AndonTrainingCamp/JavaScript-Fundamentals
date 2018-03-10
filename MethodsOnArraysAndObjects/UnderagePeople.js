/*jslint devel: true */
/*jslint es6 */
'use strict';
const peopleInput = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 17 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 15 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 18 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 16 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

let underagedArr = [];
underagedArr = peopleInput.filter(el => el.age < 18);

let stringArr = underagedArr.map(el => el.firstname + ' ' + el.lastname + ' ' + el.age);
stringArr.forEach(el => console.log(el));