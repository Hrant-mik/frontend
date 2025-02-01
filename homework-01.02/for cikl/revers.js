let number = prompt("input a number")
let revers = 0
for (let i = 0; number > 0; i++){
    revers = ((revers + (number % 10)) * 10);
    number = ~~(number / 10);
}
alert(revers / 10)