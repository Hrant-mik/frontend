function my_bin(number){
    let binary = ""
    let binary_1 = ""
    while (number > 0){
        if (number % 2 === 0){
            binary += "0"
        }else{
            binary += "1"
        }
        number = ~~(number / 2)
    }
    while (binary != ""){
        binary_1 += (binary % 10)
        binary = ~~(binary / 10)
    }
    console.log(binary_1)
}
my_bin(50)