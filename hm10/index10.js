//1
let a = 0;
if(a == 0){
    console.log("right");
}else{
    console.log("wrong");
}
//2
let a = 1;
if(a > 0){
    console.log("right");
}else{
    console.log("wrong");
}
//3
let a = -1;
if(a < 0){
    console.log("right");
}else{
    console.log("wrong");
}
//4
let a = 0;
if(a >= 0){
    console.log("right");
}else{
    console.log("wrong");
}
//5
let a = 0;
if(a <= 0){
    console.log("right");
}else{
    console.log("wrong");
}
//6
let a = 2;
if( a != 0){
    console.log("right");
}else{
    console.log("wrong");
}
//7
let a = ‘test’;
if(a == ‘test’){
    console.log("right");
}else{
    console.log("wrong");
}
//8
let a = 1;
if(a === 1){
    console.log("right");
}else{
    console.log("wrong");
}
//9
let a = 2;
if(0 < a < 5){
    console.log("right");
}else{
    console.log("wrong");
}
//10
let a = 2;
if ( a == 0 || a == 2){
    a += 7;
}else{
    a / 10;
}
console.log(a)
//11
let a = 1;
let b = 3;
if(a <= 1 && b >= 3){
    console.log(a + b);
}else{
    console.log(a-b);
}
//12
a = 3;
b = 7;
if(2 < a < 11 || 6 <= b < 14){
    console.log("right");
}else{
    console.log("wrong");
}
//13
let num = (1, 2, 3, 4);
switch(num){
    case 1:
        console.log("winter");
    case 2:
        console.log("spring");
    case 3:
        console.log("summer");
    case 4:
        console.log("autumn");
    default:
        console.log("no result")
}

