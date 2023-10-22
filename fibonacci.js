// JavaScript code to generate Fibonacci sequence using an iterative approach

function generateFibonacciIterative(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

let n = 10; // Generate Fibonacci sequence up to the 10th number
let fibonacciSeries = generateFibonacciIterative(n);
console.log(`Fibonacci sequence up to ${n} numbers: ${fibonacciSeries.join(", ")}`);
