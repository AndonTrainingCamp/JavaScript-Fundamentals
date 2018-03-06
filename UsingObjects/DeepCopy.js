'use strict';
let copyObj = {};
let o = {
	a: 1, b: {c: {x: 0}, d: {e: 3, f: 4}}
};
recrsvCopy(o,copyObj);
o.b.c.x = 'original';
copyObj.b.c.x = 'copy';
console.log(copyObj);
console.log(o);

function recrsvCopy(obj,copyObj) {
	for (let el in obj) {
		if (typeof obj[el] === typeof obj) {
			copyObj[el] = {};
			for (let el2 in obj[el]) {
				recrsvCopy(obj[el],copyObj[el]);
			}
		} else if (typeof obj[el] !== typeof obj) {
			copyObj[el] = obj[el];
		}
	}
}