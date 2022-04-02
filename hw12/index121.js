//Task1
let x = 10;
let y = 7;
x > y ? (
    alert("x is greater than y")
):(
    alert("x is not greater than y")
)
//Task2
let num = prompt("enter the number");
if(num % 2 == 0){
    alert("Number " + num + " even")
}else{
    alert("Number " + num + " odd")
}
//Task3
let num = prompt("enter the number");
let a = 'string';
console.log(a.length)
if (num > 0 && num < 10) {
    console.log( "Number " + num + " unequivocal positive" );
} else if (num >= 10 && num < 100) {
    console.log( "Number " + num + " two-digit positive" );
} else if (num >= 100) {
    console.log( "Number " + num + " positive three-digit or more" );
} else if (num < 0 && num > -10) {
    console.log( "Number " + num + " unequivocal negative" );
} else if (num <= -10 && num > -100) {
    console.log( "Number " + num + " two-digit negative" );
} else {
    console.log( "Number " + num + " negative three-digit or more" );
}
//Task 4
let first = prompt("enter the first number");
let second =prompt("enter the second number");
let third = prompt("enter the third number");
let max = function (){
    if(first > second && first > third ){
        alert(Number(first))
    }else if(first < second && second > third){
        alert(Number(second))
    }else if(first < third && second < third){
        alert(Number(third))
    }
}
max()
//Task 5
let first = prompt("enter the first number");
let second =prompt("enter the second number");
let third = prompt("enter the third number");
if((first + second) > third && (first + third) > second && (second + third) > first ){
    alert("triangle exists")
}else{
    alert("triangle does not exist")
}