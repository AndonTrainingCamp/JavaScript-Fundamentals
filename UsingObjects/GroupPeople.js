/*jslint devel: true */
/*jslint es6 */
'use strict';

const peopleInput = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

console.log(groupByAge(peopleInput));

function groupByAge(people) {
    let grouped = {},
        ageArr = [],
        i;
    for (i = 0; i < people.length; i++) {   //Copy ages from people.age to ageArr
        ageArr[i] = people[i].age;
    }
    let nextAge = ageArr[0],
        j;
    for (j = 0; j < ageArr.length - 1; j++) {      //Sort ages in ageArr
        for (i = j + 1; i < ageArr.length; i++) {
            if (nextAge > ageArr[i]) {
                ageArr[j] = ageArr[i];
                ageArr[i] = nextAge;
                nextAge = ageArr[j];
            }
        }
        nextAge = ageArr[j + 1];
    }
    let sameAge = 0,
        hasArr = false,
        k;
    for (i = 0; i < ageArr.length;) {                //Group people by order from sorted ageArr
        for (j = 0, k = 0; j < people.length; j++) {
            if (ageArr[i] === people[j].age) {
                if (!hasArr) {
                    grouped[ageArr[i]] = [];
                    hasArr = true;
                }
                grouped[ageArr[i]][k] = people[j];
                k++;
                sameAge++;
            }
        }
        hasArr = false;
        i+=sameAge;
        sameAge = 0;
    }
    return grouped;
}
