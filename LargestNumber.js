function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return "Array is empty.";
    }

    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return `The largest number in the array is: ${largestNumber}`;
}
let numberArray = [10, 5, 8, 20, 3];
let result = findLargestNumber(numberArray);

console.log(result);
