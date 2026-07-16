// Reverse an array in place. The first element becomes the last, and the last becomes the first.

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements at left and right indices
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(inputArray);
console.log("Reversed array:", reversedArray); // Output: [5, 4, 3, 2, 1]