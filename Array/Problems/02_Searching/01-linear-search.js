// 1. return target element index if found else return -1

const arr = [4, 2, 7, 1, 9];

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
const target = 7;
const index = linearSearch(arr, target);
console.log(`Element ${target} found at index ${index}.`); // Output: Element 7 found at index 2.


// 2. Check if an element exists return true if found else return false

function linearSearchExists(arr, target) {  
    if (arr.length === 0) {
        return false; // Return false if the array is empty
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true; // Return true if the target element is found
        }
    }
    return false; // Return false if the target element is not found
}

// Example usage:
const targetExists = 5;
const exists = linearSearchExists(arr, targetExists);
if (exists) {
    console.log(`Element ${targetExists} exists in the array.`); // Output: Element 5 exists in the array.
}


// 3. find the first occurrence of an element in the array

function linearSearchFirstOccurrence(arr, target) { 

    if (arr.length === 0) {
        return -1; // Return -1 if the array is empty
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the first occurrence of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}

// Example usage:
const targetFirstOccurrence = 2;
const firstOccurrenceIndex = linearSearchFirstOccurrence(arr, targetFirstOccurrence);
if (firstOccurrenceIndex !== -1) {
    console.log(`First occurrence of element ${targetFirstOccurrence} found at index ${firstOccurrenceIndex}.`); // Output: First occurrence of element 2 found at index 1.
}


// 4. find the last occurrence of an element in the array

function linearSearchLastOccurrence(arr, target) {

    if (arr.length === 0) {
        return -1; // Return -1 if the array is empty
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === target) {
            return i; // Return the index of the last occurrence of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}

// Example usage:
const targetLastOccurrence = 2;
const lastOccurrenceIndex = linearSearchLastOccurrence(arr, targetLastOccurrence);
if (lastOccurrenceIndex !== -1) {
    console.log(`Last occurrence of element ${targetLastOccurrence} found at index ${lastOccurrenceIndex}.`); // Output: Last occurrence of element 2 found at index 1.
}

