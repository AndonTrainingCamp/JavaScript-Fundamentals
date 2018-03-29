/*jslint devel: true */
/*jslint es6 */
'use strict';
let input =  [
    '3 5',
    '54561',
    '43328',
    '52388',
]; 
solve(input);

function solve(inputArray) {
    const matrixSize = inputArray[0].match(/\d+/g),
        rows = inputArray[0],
        cols = inputArray[1],
        inputMatrix = inputArray.slice(1);
    let moveMatrix = makeMoveMatrix(inputMatrix, rows, cols),
        scoreMatrix = makeScoreMatrix(inputMatrix);
    return moveHorsy(moveMatrix, scoreMatrix);

    function makeMoveMatrix(mixedArray,rowsMatrix, colsMatrix) {
        let resultMatrix = [],
            strNums;
        for (let i = 0; i < rowsMatrix; i++) {
            resultMatrix[i] = [];
            strNums = mixedArray[i];
            for (let j = 0; j < colsMatrix; j++) {
                resultMatrix[i][j] = +(strNums[j]);
            }
        }
        return resultMatrix;
    }
    function makeScoreMatrix(matrix) {
        let resultMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            resultMatrix[i] = [];
            for (let j = 0; j < matrix[i].length; j++) {
                resultMatrix[i][j] = Math.pow(2, i) - j;
            }
        }
        return resultMatrix;
    }
    function moveHorsy(moveMx, scoreMx) {
        let sum,
            jumps,
            currPosition = [],
            historyPosition = [],
            move;
        while ()
        currPosition = {}
        switch (move) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
        }
    }
}