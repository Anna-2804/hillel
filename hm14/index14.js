let num = prompt("name the number","");
let flag = true;
for(let i = 2; i < num; i++){
    if(num % i == 0){
        flag = false;
        break;
    }
}
console.log(flag)