let number = prompt("Unit?");
if (number <= 100) {
alert("0 dram")
}else if (number <= 200){
    alert((number - 100) * 200)
}else if (number > 200) {
    alert((100 * 200) + ((number - 200) * 220))
}else{
    alert("Try agein")
}