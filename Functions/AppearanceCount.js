/*jslint devel: true */
/*jslint es6 */
'use strict';

testAppereance();

function testAppereance() {
    const a1 = [2,230,-15,345,-2323],
          n1 = 23,
          expt1 = 3,
          a2 = [1,230,-15,3145,-1111],
          n2 = 1,
          expt2 = 7,
          a3 = [10,1000,-1010,10010],
          n3 = 10,
          expt3 = 6;
        console.log('Test 1');
    if (countAppereance(a1,n1) === expt1 ) {
        console.log('Your output: ' + countAppereance(a1,n1));
        console.log('Expected output: ' + expt1 + ' -> Correct!');
    } else {
        console.log('Your output: ' + countAppereance(a1,n1));
        console.log('Expected output: ' + expt1 + ' -> Incorrect!');
    }
    console.log('Test 2');
    if (countAppereance(a2,n2) === expt2 ) {
        console.log('Your output: ' + countAppereance(a2,n2));
        console.log('Expected output: ' + expt2 + ' -> Correct!');
    } else {
        console.log('Your output: ' + countAppereance(a2,n2));
        console.log('Expected output: ' + expt2 + ' -> Incorrect!');
    }
    console.log('Test 3');
    if (countAppereance(a3,n3) === expt3) {
        console.log('Your output: ' + countAppereance(a3,n3));
        console.log('Expected output: ' + expt3 + ' -> Correct!');
    } else {
        console.log('Your output: ' + countAppereance(a3,n3));
        console.log('Expected output: ' + expt3 + ' -> Incorrect!');
    }
    
}

function countAppereance(numArr, num) {
    let numString,
        count = 0, 
        i,
        j,
        k,
        m;
    num = num.toString();
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] < 0) {
            numString = ((-1)*numArr[i]).toString();
        } else {
            numString = numArr[i].toString();
        }
        if (num.length <= numString) {
            for (j = 0; j < numString.length; j++) {
                if (numString.length - j >= num.length) {
                    for (k = 0, m = j; k < num.length; k++, m++) {
                        if (num[k] != numString[m]) {
                            break;
                        }
                        if (k === num.length - 1) {
                            count++;
                        }
                    }
                }
            }
        }
    }
    return count;
}