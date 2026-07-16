// copy one array into another array

function copyArray(sourceArray) {
    // Create a new array to hold the copied values
    const copiedArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        copiedArray.push(sourceArray[i]);
    }
    return copiedArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = copyArray(originalArray);
console.log("Original array:", originalArray); // Output: [1, 2, 3, 4, 5]
console.log("Copied array:", copiedArray); // Output: [1, 2, 3, 4, 5]