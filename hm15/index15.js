let num = prompt("name the number","");
let flag = true;
if(num < 1){
    console.log(NaN)
}else{
    for(let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
}
console.log(flag)
