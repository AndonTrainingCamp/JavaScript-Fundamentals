/*jslint devel: true */
/*jslint es6 */
'use strict';

const input = ['<upcase>We are <orgcase>liViNg</orgcase> in a <lowcase><upcase>yellow <lowcase>mother <lowcase>big zombie</lowcase> gender</lowcase> submarine</upcase></lowcase>. We <upcase><orgcase>doN\'t</orgcase> have <lowcase>ANYTHING</lowcase></upcase> else.</upcase>'];

function parseTags(inputArr) {
    let inputText = inputArr[0],
        exclude = /(<\w*>)(.*?)(<\w*>)/,
        regExTest = /(<\w*>)/; 
    function replacer(match, p1, p2, p3, startInd, text) {
        if (exclude.test(match)) {
            match = match.slice(1);
            return '<' + match.replace(/(<\w*>)(.*?)(<\/\w*>)/g, replacer);
        }
        if (p1 === '<orgcase>' && p3 === '</orgcase>') {
            return p2;
        } else if (p1 === '<upcase>' && p3 === '</upcase>') {
            return p2.toUpperCase();
        } else if (p1 === '<lowcase>' && p3 === '</lowcase>') {
            return p2.toLowerCase();
        }
    }
    do {
        inputText = inputText.replace(/(<\w*>)(.*?)(<\/\w*>)/g, replacer);
    } while (regExTest.test(inputText)) {
        inputText = inputText.replace(/(<\w*>)(.*?)(<\/\w*>)/g, replacer);
    }
    return inputText;
}
console.log(parseTags(input));
