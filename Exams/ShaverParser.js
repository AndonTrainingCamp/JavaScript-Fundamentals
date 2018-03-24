/*jslint devel: true */
/*jslint es6 */
'use strict';

var fs = require("fs");
var text = fs.readFileSync("./inputShaver.txt", "utf-8");
var arrInput = text.split("\n");
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
        if (element.indexOf('<!DOCTYPE html>') !== -1) {
            htmlStartIndex = index;
        }
    });
    for (let i = 0, j = 2 + keysNum; i < htmlStartIndex - keysNum - 2; i++, j++) {
        sections[i] = arrInput[j];
    }
    for (let i = 0; i < arrInput.length - sections.length - keysNum - 2; i++) {
        html[i] = arrInput[htmlStartIndex + i];
    }
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
    // Search and replace @renderSection in html
    html.forEach((el, index) => {
        let forReplaceIndex = index,
            indexOf = el.indexOf('@renderSection("');
        if (indexOf !== -1) {
            let indexOfName = indexOf + '@renderSection("'.length,
                currentName = el.slice(indexOfName, el.length - 2);
            sectionsName.forEach((el, index) => {
                if (el === currentName) {
                    resultHtml.splice(forReplaceIndex, 1, sectionsContent[index]);
                }
            });
        }
    });
    // console.log(sectionsName);
    // console.log(sectionsContent);
    return resultHtml;
}
