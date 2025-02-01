let number = prompt("Give a number")
let new_num = number
let revers = 0
while (new_num > 0){
    revers = ((revers + (new_num % 10)) * 10);
    new_num = ~~(new_num / 10) 
}
alert(~~(revers / 10))