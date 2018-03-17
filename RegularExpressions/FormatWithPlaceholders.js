/*jslint devel: true */
/*jslint es6 */
'use strict';

let input = [
	'{ "name": "John", "age": 13 }', // options as JSON
	'My name is #{name} and I am #{age}-years-old' // template
];
console.log(solve(input));

function solve(inputArr) {
    let result,
        person = JSON.parse(inputArr[0]);
    result = inputArr[1].replace(/#\{([^\n\r\s]+)\}/g, (match, p1) => person[p1]);
    return result;
}