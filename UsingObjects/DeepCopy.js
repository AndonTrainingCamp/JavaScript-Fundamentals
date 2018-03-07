/*jslint devel: true */
/*jslint es6 */
'use strict';

let copyObj = {};
let o = {
    a: [1,2,3], b: {i: 4, c: {d: 0, k: {x: 0, e: {r: [{q:1},{w:2},{z:3}]}}}}
};
recrsvCopy(o,copyObj);
o.a[1] = 22;
copyObj.b.c.k.e.r[2].z = 888;
console.log(o);
console.log(copyObj);
console.log(copyObj.b.c.k.e.r[2].z);

function recrsvCopy(obj,copyObj) {
    for (let el in obj) {
		if (typeof obj[el] === typeof obj && !(Array.isArray(obj[el]))) {
			copyObj[el] = {};
			recrsvCopy(obj[el],copyObj[el]);
		} else if (Array.isArray(obj[el])) {
			copyObj[el] = [];
			recrsvCopy(obj[el],copyObj[el]);
		} else if (typeof obj[el] !== typeof obj) {
			copyObj[el] = obj[el];
		}
	}
}