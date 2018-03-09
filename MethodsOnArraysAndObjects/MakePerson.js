/*jslint devel: true */
/*jslint es6 */
'use strict';
const personInput = [
    ['Gosho', 'Petrov', 32, false],
    ['Bay', 'Ivan', 81, false],
    ['Pewdiepie', 'Doe', 28, false],
    ['Pesho', 'Ludiq', 30, false],
    ['Asdf', 'Xyz', 10, false],
    ['Lili', 'Ivanova', 100, true],
    ['Bat', 'Man', 22, false],
    ['Divata', 'Kotka', 26, true],
    ['Gosho', 'Patkanov', 52, false]
];

function Person(firstname, lastname, age, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
}

function makePerson(personInput) {
    let personArr = [],
        i;
    for (i = 0; i < personInput.length; i++) {
        personArr[i] = new Person(personInput[i][0], personInput[i][1], personInput[i][2], personInput[i][3]);
    }
    return personArr;
}
console.log(makePerson(personInput));
