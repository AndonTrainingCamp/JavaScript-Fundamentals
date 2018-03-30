/*jslint devel: true */
/*jslint es6 */
'use strict';

let input = [
    '1, 3, -6, 7, 4, 1, 12',
    '3',
    '1, 2, -3',
    '1, 3, -2',
    '1, -1'
];
// Expected output: 21
solve(input);
function solve(inputData) {
    let valley = [],
        patterns = [];
    makeInputData(inputData);

    function makeInputData(data) {
        valley = data[0].match(/[\-]?\d+/g);
        for (let i = 0; i < valley.lenght; i ++) {
            valley[i] = Number(valley[i]); 
        }
        console.log(valley);
        // let numPatterns = +(data[1]),
        //     currPattern;
        // for (let i = 0; i < numPatterns; i++) {
        //     currPattern = data[i + 2].match(/[\-]?\d+/g);
        //     patterns[i] = [];
        //     for (let j = 0; j < currPattern.lenght; j++) {
        //         patterns[i]
        //     }
        // }
    }
}