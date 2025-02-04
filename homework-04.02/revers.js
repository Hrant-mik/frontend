function revers(number){
    let revers = 0
    while (number > 0){
        revers = ((revers + (number % 10)) * 10);
        number = ~~(number / 10) 
    }
console.log(~~(revers / 10))
}
revers(1234)