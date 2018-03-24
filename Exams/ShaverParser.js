/*jslint devel: true */
/*jslint es6 */
'use strict';

let fs = require("fs"),
    text = fs.readFileSync("./inputShaver.txt", "utf-8"),
    arrInput = [];
if (text.indexOf('\r\n') !== -1) {
    arrInput = text.split("\r\n");
} else {
    arrInput = text.split("\n");
}
console.log(solve(arrInput));

function solve(arrInput) {
    let keysNum = +(arrInput[0]),
        keys = [], // All keys
        sections = [], // All sections
        html = [], // Raw html with Shaver view
        resultHtml; // Changes after each render
    // I. Placing the input data in 3 parts: keys, sections and html arrays
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
    // II. Separate keys: keyName[0] is relevant to keyValue[0]
    let keyName = [],
        keyValue = []; // Value can be string, boolean or array
    keys.forEach((el, index) => {
        let currKeyValue,
            currIndex = el.indexOf(':');
        if (currIndex !== -1) {
            keyName.push(el.slice(0, currIndex)); // Left part :
            currKeyValue = el.slice(currIndex + 1); // : Right part
            if (currKeyValue.indexOf(',') !== -1) {
                let arr = [],
                    currStartIndex = 0;
                    currIndexComa = currKeyValue.indexOf(','),
                    currValueArr;
                    while (currIndexComa !== -1) {
                        currValueArr = currKeyValue.slice(currStartIndex, currIndexComa);
                        if () { // Check what type is the value (string or numering)

                        }
                        arr.push(currValueArr);
                        currStartIndex = currIndexComa + 1;
                        currIndexComa = currKeyValue.indexOf(',');
                    }
                keyValue.push(arr);
            } else if (currKeyValue.indexOf('true') !== -1 || currKeyValue.indexOf('false') !== -1) {
                if (currKeyValue.indexOf('true') !== -1) {
                    currKeyValue = true;
                    keyValue.push(currKeyValue);
                } else {
                    currKeyValue = false;
                    keyValue.push(currKeyValue);
                }
            } else {
                keyValue.push(currKeyValue);
            }
        }
    });
    // III. Separate sections: sectionsName[0] is relevant to sectionsContent = [0]
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
    // IV. Render @renderSection's in the html
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
    // V. Render non-condition and non-loop statements
    
    return resultHtml;
}
