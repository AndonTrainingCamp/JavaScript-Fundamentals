/*jslint devel: true */
/*jslint es6 */
'use strict';

let input = [1,2,1,4,1,3,4,1,111,3,2,1,'1'],
	input2 = [ '_h/_', '^54F#', 'V', '^54F#', 'Z285', 
				'kv?tc`', '^54F#', '_h/_', 'Z285', '_h/_', 
				'kv?tc`', 'Z285', '^54F#', 'Z285', 'Z285', 
				'_h/_', '^54F#', 'kv?tc`', 'kv?tc`', 'Z285' ];

solve(input);
solve(input2);

function solve(arr) {
    Array.prototype.remove = function (value) {
        let newArr = [],
            i,j;
        for (i = 0, j = 0; i < this.length; i++) {
            if (value !== this[i]) {
                newArr[j] = this[i];
                j++;
            }
        }
        return newArr;
    }
    console.log(arr.remove(arr[0]));
}
