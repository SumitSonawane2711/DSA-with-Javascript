// 1. Find Unique element only

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 10];

function findUnique(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }

    for (let i = 0; i < arr.length; i++) {
        let isUnique = true;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                isUnique = false; // Mark as not unique if a duplicate is found
                break;
            }
        }
        if (isUnique) {
            return arr[i]; // Return the unique element
        }
    }
    return null; // Return null if no unique element is found
}

// Example usage:
const uniqueElement = findUnique(arr);
console.log("Unique element:", uniqueElement); // Output: 4