/*jslint devel: true */
/*jslint es6 */
'use strict';

let inputWords = ['abba', 'kalak', 'apo', 'olga', 'xooooxoooox', 'aa', 'ab'];
findPalindromes(inputWords);

function findPalindromes(words) {
    let counter = 0;
    for (let el in words) {
        if (!(words[el].length % 2)) {
            let half1 = words[el].slice(0, words[el].length / 2),
                half2 = words[el].slice(words[el].length / 2);
            for (let i = 0; i < half1.length; i++) {
                if (half1[i] === half2[half1.length - 1 - i]) {
                    counter++;
                }
            }
            if (half1.length === counter) {
                console.log(words[el] + ' IS palindrome');
            } else {
                console.log(words[el] + ' is NOT palindrome');
            }
            counter = 0;
        } else {
            let half1 = words[el].slice(0, Math.floor(words[el].length / 2)),
                half2 = words[el].slice(Math.floor(words[el].length / 2 + 1));
            for (let i = 0; i < half1.length; i++) {
                if (half1[i] === half2[half1.length - 1 - i]) {
                    counter++;
                }
            }
            if (half1.length === counter) {
                console.log(words[el] + ' IS palindrome');
            } else {
                console.log(words[el] + ' is NOT palindrome');
            }
            counter = 0;
        }
    }
}