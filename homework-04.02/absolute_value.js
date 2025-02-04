function my_abs(num){
    let absolute
    if (num < 0){
        absolute = -num
    }else{
        absolute = +num
    }
    console.log(absolute)
}
my_abs(-8)