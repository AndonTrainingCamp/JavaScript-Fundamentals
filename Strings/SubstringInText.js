/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = [
	'in',
	'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 daysin'
]

function searchText(inputArr) {
    const subString = inputArr[0],
          text = inputArr[1];
    let ssCount = 0,
        i, j;
    for (i = 0, j = 0; i <= text.length - subString.length; i++) {
        if (subString[j] === text[i]) {
            for (; j < subString.length; j++) {
                if (subString[j] === text[i + j] && j === subString.length - 1) {
                    ssCount++;
                } else if (subString[j] !== text[i + j]) {
                    break;
                }
            }
            j = 0;
        }
    }
    return ssCount;
}

function searchTextWithMethod(inputArr) {
    let index,
        count = 0;
    index = inputArr[1].indexOf(inputArr[0]);
    while (index !== -1) {
        count++;
        index = inputArr[1].indexOf(inputArr[0], index + 1);
    }
    return count;
}

console.log(searchText(input));
console.log(searchTextWithMethod(input));