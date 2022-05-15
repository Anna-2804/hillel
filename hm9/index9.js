//hw1
let numOrStr = prompt('input number or string');
if(numOrStr.trim() === '' || isNaN( +numOrStr )) {
    console.log('Empty String' || ' number is Ba_NaN')
}else if(numOrStr === null){
    console.log('вы отменили')
}else{
    console.log('не верно')
}

//hw2

let numOrStr = prompt('input number or string');
console.log(numOrStr)
switch (numOrStr) {
    case null:
        console.log('you cancelled');
        break;
    case (numOrStr.trim() === '' ? numOrStr : ''):
        console.log('empty string');
        break;
    case (isNaN(numOrStr) ? numOrStr : ''):
        console.log(' number is Ba_NaN');
        break;

    default:
        console.log('OK!');
}



