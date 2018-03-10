/*jslint devel: true */
/*jslint es6 */
'use strict';
const peopleInput = [
    {firstname: 'Gosho', lastname: 'Petrov', age: 33, gender: false},
    {firstname: 'Lili', lastname: 'Ivanova', age: 100, gender: true},
    {firstname: 'John', lastname: 'Doe', age: 21, gender: false},
    {firstname: 'Lepa', lastname: 'Brena', age: 54, gender: true},
    {firstname: 'Chicho', lastname: 'Tom', age: 17, gender: false},
    {firstname: 'Malko', lastname: 'Kote', age: 16, gender: true}
];

function youngestMale(person) {
    let name,
        index;
    person.sort(function (a, b) {
        return a.age - b.age;
    });
    index = person.findIndex(el => el.gender === false);
    name = person[index].firstname + ' ' + person[index].lastname;
    console.log(name);
}
youngestMale(peopleInput);