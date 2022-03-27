const QuestionUsers = prompt("What do you want to do:add, sub, mult, div?");
const firstNumber = prompt("say the first number");
const secondNumber = prompt("say the second number");
if( QuestionUsers == "+"){
    const result = firstNumber + secondNumber;
    alert(result)
}else if( QuestionUsers == "-"){
    const result =firstNumber - secondNumber;
    alert(result)
}else if(QuestionUsers == "*"){
    const result = firstNumber * secondNumber;
    alert(result)
}else if(QuestionUsers == "/"){
    const result = firstNumber / secondNumber;
    alert(result)
}


