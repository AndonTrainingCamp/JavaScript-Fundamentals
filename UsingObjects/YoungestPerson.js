/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = [
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42',
    'Bat', 'Man', '32'
];

solve(input);

function solve(arrPerson) {
    let person = [],
        i,
        j;
    for (i = 0, j = 0; j < arrPerson.length / 3; i+=3, j++) {
        person[j] = {
            firstname: arrPerson[i],
            lastname: arrPerson[i + 1],
            age: +(arrPerson[i + 2])
        };
    }
    findYoungest(person);
}

function findYoungest(person) {
    let age = person[0].age,
        indexArr = [0],
        j = 0,
        i;
    for (i = 0; i < person.length; i++) {
        if (person[i].age < age) {
            age = person[i].age;
            indexArr[j] = i;
        }
    }
    for (i = 0; i < person.length; i++) {
        if (person[i].age === age && indexArr[0] !== i) {
            j++;
            indexArr[j] = i;
        }
    }
    for (i = 0; i < indexArr.length; i++) {
        console.log(person[indexArr[i]].firstname, person[indexArr[i]].lastname);
    }
}