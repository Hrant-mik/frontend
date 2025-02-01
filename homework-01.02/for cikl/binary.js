let number = prompt("Imput number")
let binery = ""
for (i = 0; number > 0; i++){
    if (number % 2 === 0){
        binery = binery + "1" 
    }else{
        binery = binery + "0"
    }
    number = ~~(number / 2)
}
alert(binery)