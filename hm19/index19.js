"use strict"
//Основная функция mainFunction
function mainFunction(numb1, num2) {
    alert(numb1 ** num2)

}
    function exponentiation(callback) {
        let numb1 = prompt("enter the number");
        let num2 = prompt("enter the number");
        let number = null;
        callback(numb1, num2)
    }
    exponentiation(mainFunction)


