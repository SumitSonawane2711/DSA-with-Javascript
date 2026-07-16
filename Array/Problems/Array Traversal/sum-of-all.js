// Sum of all elements
const Arr = [4, 8, 2, 10, 5];

function sumOfAll(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
const totalSum = sumOfAll(Arr);
console.log("Sum of all elements:", totalSum); // Output: 29