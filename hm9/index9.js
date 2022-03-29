//hw1
if(numOrStr.trim() === '' || isNaN( +numOrStr )) {
    console.log('Empty String' || ' number is Ba_NaN')
} else {
    console.log('вы отменили');
}

//hw2
let numOrStr = prompt('input number or string');
console.log(numOrStr);
switch(null) {
    case '':
        console.log('Empty String');
        break;
    case '+numOrStr':
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}


