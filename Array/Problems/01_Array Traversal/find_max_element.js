// Find the maximum element

// Input: [4, 8, 2, 10, 5]

// Output:
// 10

function findMaxElement(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
const inputArray = [4, 8, 2, 10, 5];
const maxElement = findMaxElement(inputArray);
console.log("max :" , maxElement); // Output: 10


// Find the minimum element

function findMinElement(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Example usage:
const minElement = findMinElement(inputArray);
console.log("min :" , minElement); // Output: 2