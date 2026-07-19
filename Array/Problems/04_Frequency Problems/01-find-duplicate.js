// 1. Find duplicates and return an array of duplicate values

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 10];

function findDuplicates(arr) {
    if (arr.length === 0) {
        return []; // Return an empty array if the input array is empty
    }

    const duplicates = [];
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]); // Add to duplicates if not already present
            }
        } else {
            seen.add(arr[i]); // Add to seen set
        }
    }
    return duplicates; // Return the array of duplicate values found
}

// Example usage:
const duplicateValues = findDuplicates(arr);
console.log("Duplicate values:", duplicateValues); // Output: [1, 2, 3]

// Implemet above problem without using set and includes method

function findDuplicatesWithoutSet(arr) {
    if (arr.length === 0) {
        return []; // Return an empty array if the input array is empty
    }   

    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                isDuplicate = true; // Mark as duplicate if found in previous elements
                break;
            }
        }
        if (isDuplicate) {
            let alreadyAdded = false;   
            for (let k = 0; k < duplicates.length; k++) {
                if (arr[i] === duplicates[k]) {
                    alreadyAdded = true; // Check if already added to duplicates
                    break;
                }
            }
            if (!alreadyAdded) {
                duplicates.push(arr[i]); // Add to duplicates if not already present
            }
        }
    }
    return duplicates; // Return the array of duplicate values found
}

// Example usage:
const duplicateValuesWithoutSet = findDuplicatesWithoutSet(arr);
console.log("Duplicate values without using Set:", duplicateValuesWithoutSet); // Output: [1, 2, 3] 


