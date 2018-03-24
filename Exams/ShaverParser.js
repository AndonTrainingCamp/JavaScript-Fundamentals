/*jslint devel: true */
/*jslint es6 */
'use strict';

var fs = require("fs");
var text = fs.readFileSync("./inputShaver.txt", "utf-8");
var arrInput = text.split("\n"); // If the input.txt is made with Windows => change to text.split("\r\n")
console.log(solve(arrInput));

function solve(arrInput) {
    let keysNum = +(arrInput[0]),
        keys = [],
        sections = [],
        html = [],
        resultHtml;
    // Placing the input data in 3 parts: keys, sections and html arrays
    for (let i = 0; i < keysNum; i++) {
        keys[i] = arrInput[i + 1];
    }
    let htmlStartIndex;
    arrInput.forEach((element, index) => {
        if (element.toLowerCase() === '<!DOCTYPE html>'.toLowerCase()) {
            htmlStartIndex = index;
        }
    });
    for (let i = 0, j = 2 + keysNum; i < htmlStartIndex - keysNum - 2; i++, j++) {
        sections[i] = arrInput[j];
    }
    for (let i = 0; i < arrInput.length - sections.length - keysNum - 2; i++) {
        html[i] = arrInput[htmlStartIndex + i];
    }
    html = html.join('');
    resultHtml = html.concat();
    // Prepare sections: sectionsName[0] is relevant to sectionsContent = [0]
    let sectionsName = [],
        sectionsContent = [],
        currSectionContent = [];
    sections.forEach((el, index) => {
        let indexInEl = el.indexOf('@section ');
        if (indexInEl !== -1) {
            let name = el.slice('@section '.length, el.length - 2)
            sectionsName.push(name);
        } else if (el.indexOf('}') === -1) {
            currSectionContent.push(el);
        } else {
            sectionsContent.push(currSectionContent.join(''));
            currSectionContent = [];
        }
    });
    // Render @renderSection's in the html
    let nextIndex = 0; // From which to start the search
    while (resultHtml.indexOf('@renderSection') !== -1) {
        let indexOfsection = html.indexOf('@renderSection', nextIndex),
            indexOfClosedBra = html.indexOf(')', indexOfsection);
        if (indexOfsection !== -1) {
            sectionsName.forEach((el, index) => {
                if (html.indexOf(el, indexOfsection) !== -1 && html.indexOf(el, indexOfsection) < indexOfClosedBra) {
                    let toReplace = '@renderSection("' + el + '")';
                    resultHtml = resultHtml.replace(toReplace, sectionsContent[index]);
                }
            });
        }
        nextIndex = indexOfsection + 1; // Evalute for next search of @renderSection
    }
    return resultHtml;
}
