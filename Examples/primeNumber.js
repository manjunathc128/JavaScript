const num = parseInt(prompt("Enter the positive integer: "))
isPrime = true;
if (num === 0 || num === 1) console.log("number is neither prime nor composite number")

else {
    for(let i = 2; i < num ; i++){
         if(num % i === 0){
            isPrime = false;
            break;}
    }
}

if (isPrime) console.log('Given number is Prime')
else console.log('Given number is not prime')
