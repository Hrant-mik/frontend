const NATURAL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function calculator(operation){
    let operator = ""
    let numbers
    for (let i = 0; i <= operation.length; i++){
        if ((operation[i] === "*") || (operation[i] === "+") ||(operation[i] === "-") ||(operation[i] === "/")){
            operator += operation[i]
            numbers = operation.split(operator)
            break
        }
    }
    switch (operator){
        case "+":
            console.log(+numbers[0] + +numbers[1])
            break
        case "-":
            console.log(numbers[0] - numbers[1])
            break
        case "*":
            console.log(numbers[0] * numbers[1])
            break
        case "/":
            console.log(numbers[0] / numbers[1])
            break
    }
    
}
calculator("55+2")