function calculator(operation){
    let value = 0
    if (operation[1] === "*"){
        value = (operation[0] * operation[2])
    }else if (operation[1] === "/"){
        value = (operation[0] / operation[2])
    }else if (operation[1] === "-"){
        value = (operation[0] - operation[2])
    }else if (operation[1] === "+"){
        value = (operation[0] + operation[2])
    }
    console.log(value)
}
calculator("5+2")