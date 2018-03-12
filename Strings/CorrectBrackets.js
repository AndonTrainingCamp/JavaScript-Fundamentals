/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = ['(()))('];

function checkBrackets(stringArr) {
    const expression = stringArr[0];
    let openBra = 0,
        i;
    for (i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            openBra++;
        } else if (expression[i] === ')') {
            openBra--;
            if (openBra < 0) {
                return 'Incorrect';
            }
        }
    }
    return openBra === 0 ? 'Correct' : 'Incorrect';
}
console.log(checkBrackets(input));
