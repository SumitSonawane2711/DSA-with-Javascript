// 1. Swap first and last element
function swapFirstAndLast(arr) {
    if (arr.length < 2) {
        return arr; // Return the array as is if it has less than 2 elements
    }
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const swappedArray = swapFirstAndLast(inputArray);
console.log("Array after swapping first and last elements:", swappedArray); // Output: [5, 2, 3, 4, 1]