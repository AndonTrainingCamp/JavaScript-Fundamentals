/*jslint devel: true */
/*jslint es6 */
'use strict';

let fs = require("fs"),
    text = fs.readFileSync("./inputShaver8.txt", "utf-8"),
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
        html = []; // Raw html with Shaver view
    // I. Placing the input data in 3 parts: keys, sections and html arrays
    for (let i = 0; i < keysNum; i++) {
        keys[i] = arrInput[i + 1];
    }
    let htmlStartIndex,
        indexLastSection;
    for (let i = keysNum + 2; i < arrInput.length; i++) {
        if (arrInput[i].indexOf('@section') !== -1) {
            indexLastSection = i;
        }
    }
    for (let i = indexLastSection; i < arrInput.length; i++) {
        if (arrInput[i].indexOf('}') !== -1) {
            htmlStartIndex = i + 1;
            break;
        }
    }
    for (let i = 0, j = 2 + keysNum; i < htmlStartIndex - keysNum - 2; i++ , j++) {
        sections[i] = arrInput[j];
    }
    for (let i = 0; i < arrInput.length - sections.length - keysNum - 2; i++) {
        html[i] = arrInput[htmlStartIndex + i];
    }
    html = html.join('');
    // II. Separate keys: keyName[0] is relevant to keyValue[0]
    let keyName = [], // (Left part :) Ex -> title:Telerik Academy
        keyValue = []; // Values can be string, boolean or array, (: Right part)
    keys.forEach((el, index) => {
        let currKeyValue,
            currIndex = el.indexOf(':');
        if (currIndex !== -1) {
            keyName.push(el.slice(0, currIndex)); // Left part :
            currKeyValue = el.slice(currIndex + 1); // : Right part
            if (currKeyValue.indexOf(',') !== -1) { // If coma is found, then there is an array
                let arr = [],
                    currBeginIndex = 0,
                    currIndexComa = currKeyValue.indexOf(','), // Index of the first coma
                    currValueArr;
                while (currIndexComa !== -1) {
                    currValueArr = currKeyValue.slice(currBeginIndex, currIndexComa);
                    if (!isNaN(currValueArr)) { // Check what type is the value (string or numering)
                        currValueArr = +(currValueArr);
                    }
                    arr.push(currValueArr);
                    currBeginIndex = currIndexComa + 1;
                    currIndexComa = currKeyValue.indexOf(',', currIndexComa + 1);
                    if (currIndexComa === -1) {
                        currValueArr = currKeyValue.slice(currBeginIndex);
                        if (!isNaN(currValueArr)) { // Check what type is the value (string or numering)
                            currValueArr = +(currValueArr);
                        }
                        arr.push(currValueArr);
                    }
                }
                keyValue.push(arr);
            } else if (currKeyValue.indexOf('true') !== -1 || currKeyValue.indexOf('false') !== -1) { // If boolean is found for value
                if (currKeyValue.indexOf('true') !== -1) {
                    currKeyValue = true;
                    keyValue.push(currKeyValue);
                } else {    // For string values
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
            sectionsName.push('renderSection("' + name + '")');
        } else if (el.indexOf('}') === -1) {
            currSectionContent.push(el);
        } else {
            sectionsContent.push(currSectionContent.join(''));
            currSectionContent = [];
        }
    });
    // Concat the two arrays of names relevant to two arrays of values
    let inputNames = sectionsName.concat(keyName),
        inputValues = sectionsContent.concat(keyValue);
    console.log(inputNames);
    console.log(inputValues);
    html = renderHtml(html);
    // Main render function
    function renderHtml(htmlInput) {
        let resultHtml = htmlInput;
        // Render non-@if and non-@foreach statements
        for (let i = 0; i < inputNames.length; i++) {
            while (resultHtml.indexOf('@' + inputNames[i]) !== -1 && resultHtml.indexOf('@' + inputNames[i]) - 1 !== '@') {
                resultHtml = resultHtml.replace('@' + inputNames[i], inputValues[i]);
            }
        }
        // Render @if, @foreach statements and '@@'
        while (resultHtml.indexOf('@if') !== -1 && resultHtml.indexOf('@if') - 1 !== '@') {
            for (let i = 0; i < inputNames.length; i++) {
                let indexOfIfParam = resultHtml.indexOf('(' + inputNames[i] + ')', resultHtml.indexOf('@if'));
                if (indexOfIfParam !== -1 && indexOfIfParam < resultHtml.indexOf('{', resultHtml.indexOf('@if'))) {
                    resultHtml = renderIf(resultHtml, resultHtml.indexOf('@if'), resultHtml.indexOf('}', resultHtml.indexOf('@if')), inputValues[i]);
                }
            }
        }
        while (resultHtml.indexOf('@foreach') !== -1 && resultHtml.indexOf('@foreach') !== '@') {
            resultHtml = renderForeach(resultHtml, resultHtml.indexOf('@foreach'), resultHtml.indexOf('}', resultHtml.indexOf('@foreach')));
        }
        while (resultHtml.indexOf('@@') !== -1) {
            resultHtml = resultHtml.replace('@@', '@');
        }
        return resultHtml;
    }
    // Render function for @if
    function renderIf(inputHtml, startState, endState, ifParam) {
        let part1 = inputHtml.slice(0, startState),
            part2 = inputHtml.slice(startState, endState + 1),
            part3 = inputHtml.slice(endState + 1);
        let newHtml;
        if (ifParam) {
            part2 = part2.slice(part2.indexOf('{') + 1, part2.indexOf('}'));
        } else {
            part2 = '';
        }
        newHtml = part1 + part2 + part3;
        return newHtml;
    }
    // Render function for @foreach
    function renderForeach(inputHtml, startState, endState) {
        let part1 = inputHtml.slice(0, startState),
            part2 = inputHtml.slice(startState, endState + 1),
            part3 = inputHtml.slice(endState + 1);
        let newHtml;
        let elName = part2.slice(part2.indexOf('(var ') + 5, part2.indexOf(' in')),
            arrayName = part2.slice(part2.indexOf('(var ' + elName + ' in ') + ('(var ' + elName + ' in ').length, part2.indexOf(')')),
            indexArrayName;
        inputNames.forEach((el, index) => {
            if (el === arrayName) {
                indexArrayName = index;
            }
        });
        let part2AfterLoop = '';
        part2 = part2.slice(part2.indexOf('{') + 1, part2.indexOf('}'));
        let currPart = part2.concat();
        for (let i = 0; i < inputValues[indexArrayName].length; i++) {
            while (part2.indexOf('@' + elName) !== -1) {
                part2 = part2.replace('@' + elName, inputValues[indexArrayName][i]);
            }
            part2AfterLoop = part2AfterLoop.concat(part2);
            part2 = currPart.concat();
        }
        newHtml = part1 + part2AfterLoop + part3;
        return newHtml;
    }
    return html;
}
