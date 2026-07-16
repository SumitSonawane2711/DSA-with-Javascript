/**
 * Linear Search Algorithm
 
time complexity : O(n)
space complexity : O(1)
 */

// Function to perform linear search

function linearSearch(arr, target) {

    if (arr.length === 0) {
        return -1; // Return -1 if the array is empty
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}

// Example usage:
const array = [4, 2, 7, 1, 9];
const target = 7;
const index = linearSearch(array, target);
if (index !== -1) {
    console.log(`Element ${target} found at index ${index}.`);
} else {
    console.log(`Element ${target} not found in the array.`);
}
