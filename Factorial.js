function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// Example usage
let num = 5;
let result = calculateFactorial(num);

console.log(`The factorial of ${num} is: ${result}`);
