/*jslint devel: true */
/*jslint es6 */
'use strict';
const peopleInput = [
    {firstname: 'Gosho', lastname: 'Petrov', age: 17, gender: false},
    {firstname: 'Lili', lastname: 'Ivanova', age: 100, gender: true},
    {firstname: 'John', lastname: 'Doe', age: 15, gender: false},
    {firstname: 'Lepa', lastname: 'Brena', age: 54, gender: true},
    {firstname: 'Asdf', lastname: 'Xyz', age: 16, gender: false},
    {firstname: 'Malko', lastname: 'Kote', age: 18, gender: true}
];

function calcAvgAge(person) {
    let sumAge = 0,
        onlyFemaleArr = [];
    onlyFemaleArr = person.filter(el => el.gender === true);
    onlyFemaleArr.forEach(el => sumAge+=el.age);
    return (sumAge / onlyFemaleArr.length).toFixed();
}

console.log(calcAvgAge(peopleInput));