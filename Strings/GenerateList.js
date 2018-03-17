/*jslint devel: true */
/*jslint es6 */
'use strict';

let peopleInput = [{name: 'Pesho', age: 20}, {name: 'Gosho', age: 30}],
    tmplInput = document.getElementById('list-item').innerHTML;

let peopleList = generateList(peopleInput, tmplInput);
document.getElementById('output').innerHTML = peopleList;

function generateList(people, tmpl) {
    let result,
        strByTmpl,
        strArr = [];
    for (let el in people) {
        strByTmpl = tmpl.replace(/-\{([^\n\r\s]+)\}-/g, function(match, p1) {
            return people[el][p1];
        });
        strByTmpl = '<li>' + strByTmpl + '</li>';
        strArr.push(strByTmpl);
    }
    result = '<ul>' + strArr.join('') + '</ul>';
    return result;
}