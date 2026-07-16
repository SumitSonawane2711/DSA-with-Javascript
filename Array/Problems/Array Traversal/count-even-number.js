//1. Count even numbers

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countEvenNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }   
    return count;
}

// Example usage:
const evenCount = countEvenNumbers(array);
console.log("Count of even numbers:", evenCount); // Output: 5


// 2. Count odd numbers

function countOddNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }   
    return count;
}
}

// Example usage:
const oddCount = countOddNumbers(array);
console.log("Count of odd numbers:", oddCount); // Output: 5


// 3. Count positive and negative numbers

function countPositiveNegative(arr) {
    let positiveCount = 0;
    let negativeCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        }
    }
    return { positiveCount, negativeCount };
}

// Example usage:
const posNegCount = countPositiveNegative(array);
console.log("Count of positive numbers:", posNegCount.positiveCount);
console.log("Count of negative numbers:", posNegCount.negativeCount);


// count occurences of the given number in the array

function countOccurrences(arr, num) {   
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    return count;
}

// Example usage:
const numberToCount = 5;
const occurrences = countOccurrences(array, numberToCount);
console.log(`Count of ${numberToCount} in the array:`, occurrences); // Output: 1