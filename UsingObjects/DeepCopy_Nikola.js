Object.prototype.deepCopy = function (){
    let copy = Array.isArray(this) ? [] : {}; //Array is an object too

    for (let prop in this) {
        if (!this.hasOwnProperty(prop)) continue; //skips methods derived from Object

        copy[prop] = typeof this[prop] === 'object'
            ? this[prop].deepCopy()
            : this[prop];
    }

    return copy;
};

//TESTING FOR COPYING
const a = {b: {c: 1, d: 2}, e: [{f: 1, g: 2}, 3, {h: false}]};
const b = a.deepCopy();

a.b = 1; // properties of constant objects can still be modified
a.e = 2;

console.log(b);
console.log(a);
