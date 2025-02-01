let age1 = prompt("age1?");
let age2 = prompt("age2?");
let age3 = prompt("age3?");
let age4 = prompt("age4?");
if ((age2 > age1) == (age3 > age1) == (age4 > age1)){
    alert(age1)
}else if ((age1 > age2) == (age3 > age2) == (age4 > age2)){
    alert(age2)
}else if ((age1 > age3) == (age2 > age3) == (age4 > age3)){
    alert(age3)
}else if ((age1 > age4) == (age2 > age4) == (age3 > age4)){
    alert(age4)
}