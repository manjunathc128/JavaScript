let factorial = function (num){
    if (num === 1 || num === 0) return 1
    
    else return num * factorial(num -1)
    
}

num = prompt("Enter the positive integer: ")

if (num <= 0) console.log("number is not an positive integer")

else console.log(factorial(num))
