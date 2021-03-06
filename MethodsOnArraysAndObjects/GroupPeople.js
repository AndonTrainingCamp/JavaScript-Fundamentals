/*jslint devel: true */
/*jslint es6 */
'use strict';

const peopleInput = [
    {firstname: 'Gosho', lastname: 'Petrov', age: 33},
    {firstname: 'Bay', lastname: 'Ivan', age: 25},
    {firstname: 'John', lastname: 'Doe', age: 16},
    {firstname: 'Pesho', lastname: 'Pesho', age: 22},
    {firstname: 'Asdf', lastname: 'Xyz', age: 81},
    {firstname: 'Gosho', lastname: 'Gosho', age: 19}
];

function groupPerson(person) {
    let sorted;
    sorted = person.sort((a, b) => {
        let name1 = a.firstname,
            name2 = b.firstname;
        if (name1 < name2) {
            return -1;
        };
        if (name1 > name2) {
            return 1;
        };
        return 0;
    });
    
    const reducer = (result, currValue, index, arr) => {
        let letter = arr[index].firstname[0];
        if (!Array.isArray(result[letter])) {
            result[letter] = [];
        }
        result[letter].push(arr[index]);
        return result;
    };
    return sorted.reduce(reducer, {});
}
console.log(groupPerson(peopleInput));