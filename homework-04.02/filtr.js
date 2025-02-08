function my_filter(func, num){
    const aray = []
    for (let i = 0; i <= num.length; i++){
        func(num[i])
        }
    }
    
const numbers = [1, 2, 3, 4, 5, 6, 7]
function isprime(n){
    if (n % 2 == 0){
        return n
    }
}
console.log(my_filter(isprime(), numbers))