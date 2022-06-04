//hw1
let numOrStr = +prompt('input number or string');
console.log(numOrStr);
if('' || isNaN( +numOrStr) || numOrStr === null) {
    console.log('не верно')
}else{
    console.log('ок')
}

//hw2

let numOrStr = +prompt('input number or string');
console.log(numOrStr)
switch (numOrStr) {
    case null:
        console.log('you cancelled');
        break;
    case (''):
        console.log('empty string');
        break;
    case (+numOrStr ):
        console.log(' number is Ba_NaN');
        break;

    default:
        console.log('OK!');
}