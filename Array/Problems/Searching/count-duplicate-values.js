// Count duplicate values in an array

const array = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 10];

function countDuplicateValues(arr) {

    if(arr.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }   

        }
    }
    return count; // Return the count of duplicate values found
}

// Example usage:
const duplicateCount = countDuplicateValues(array);
console.log("Count of duplicate values:", duplicateCount); // Output: 3
