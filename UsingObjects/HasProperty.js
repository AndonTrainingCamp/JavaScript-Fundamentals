/*jslint devel: true */
/*jslint es6 */
'use strict';

const testObj = {
    a: [1,2,3], b: {i: 4, c: {d: 0, k: {x: 0, e: {r: [{q:1},{w:2},{z:3}]}}}}, r: 0
};

console.log(hasProperty(testObj,'c'));

function hasProperty(obj,prop) {
    let result = false;
    for (let el in obj) {
        if (el === prop) {
            result = true;
            break;
        } else if (typeof obj[el] === typeof obj && !(Array.isArray(obj[el]))) {
            result = hasProperty(obj[el],prop);
            if (result === true) {
                break;
            }
		} else if (Array.isArray(obj[el])) {
            result = hasProperty(obj[el],prop);
            if (result === true) {
                break;
            }
        }
    }
    return result;
}