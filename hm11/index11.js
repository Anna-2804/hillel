"use strict";
let userAge = prompt("what is your year of birth?");
if(userAge == null){
    alert("It is a pity that you did not want to enter you age");
}else{
    alert(userAge);
}
let userCity = prompt("What city do you live in?","");
if(userCity == null){
    alert("It is a pity that you did not want to enter you city")
}
else if(userCity == "Kyiv" || userCity == "Moscow" || userCity == "Minsk"){
    alert(`you live in the capital ${userCity}`);
}else if(userCity != "Kyiv" || userCity != "Moscow" || userCity != "Minsk"){
    alert(`you live in ${userCity} city`);
}
let userSport = prompt("What is your favorite sport?");
switch(userSport){
    case "judo":
        alert("Cool! Do you want to become Antal Kovac");
        break;
    case "boxing":
        alert("Cool! Do you want to become Oleksandr Usyk");
        break;
    case "karate":
        alert("Cool! Do you want to become Rafael Mahir oglu Agayev");
        break;
    default:
        alert("It is a pity that you did not want to enter your favorite sport");
}







