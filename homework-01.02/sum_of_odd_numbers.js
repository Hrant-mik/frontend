let number = prompt("Give a number")
let n = 1
let sum = 0
while (n <= number){
    if (n % 2 != 0){
        sum = sum + n;
    }
    n++
}
alert(sum)