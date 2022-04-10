"use strict"
let arg1 = prompt("enter the number", '');
let arg2 = prompt("enter the power to which this number is to be raised", '');
function showMessage(arg1, arg2 = 1) {
    let result = arg1;
    if (isNaN(arg1) || isNaN(arg2)) {
        alert("some error");
    } else  {
        result *= arg1;
        return result;
    }

}
let result = showMessage(arg1, arg2);
alert (result)