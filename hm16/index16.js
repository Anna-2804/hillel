"use strict"
function showMessage(arg1, arg2 = 1) {
    let result = arg1;

    for (let i = 1; i < arg2; i++) {
        result *= arg1;
    }

    return result;
}

let arg1 = prompt("enter the number", '');
let arg2 = prompt("enter the power to which this number is to be raised", '');

if (isNaN(arg1) || isNaN(arg2)) {
    alert("some error");
} else {
    alert( showMessage(arg1, arg2 = 1) );
}