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
    walkInTheValley(valley, patterns);
    function makeInputData(data) {
        valley = data[0].match(/[\-]?\d+/g);
        for (let i = 0; i < valley.length; i++) {
            valley[i] = +(valley[i]);
        }
        let numPatterns = +(data[1]),
            currPattern;
        for (let i = 0; i < numPatterns; i++) {
            currPattern = data[i + 2].match(/[\-]?\d+/g);
            patterns[i] = [];
            for (let j = 0; j < currPattern.length; j++) {
                patterns[i][j] = +(currPattern[j]);
            }
        }
    }
    function walkInTheValley(valleyArr, patternsArr) {
        let allSums = [],
            sum = valleyArr[0],
            currPosition = 0,
            positionHistory = [],
            samePosition = false,
            goDwarf = true;
        for (let i = 0; i < patternsArr.length; i++) {
            positionHistory.push(0);
            while (goDwarf) {
                for (let j = 0; j < patternsArr[i].length; j++) {
                    currPosition += patternsArr[i][j];
                    if (currPosition < 0 || currPosition > valleyArr.length - 1) {
                        goDwarf = false;
                        break;
                    }
                    for (let k = 0; k < positionHistory.length; k++) {
                        if (currPosition === positionHistory[k]) {
                            goDwarf = false;
                            samePosition = true;
                            break;
                        }
                    }
                    if (samePosition) {
                        break;
                    }
                    positionHistory.push(currPosition);
                    sum += valleyArr[currPosition];
                }
            }
            allSums.push(sum);
            sum = valleyArr[0];
            currPosition = 0;
            positionHistory = [];
            samePosition = false;
            goDwarf = true;
        }
        let result = allSums.reduce(function(a, b) {
            return Math.max(a, b);
        });
        console.log(result);
        return result;
    }
}
