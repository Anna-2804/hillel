let num = prompt("name the number","");
let flag = true;
for(let i = 2; i < num; i++){
    if(num % 1 == 0){
        flag = false
    }
}
console.log(flag)