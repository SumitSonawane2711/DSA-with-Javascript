// 1.Left rotate by one

const arr = [1, 2, 3, 4, 5];

function leftRotateByOne(arr) {
    if (arr.length === 0) {
        return arr; // Return the array as is if it's empty
    }
    const firstElement = arr.shift(); // Remove the first element
    arr.push(firstElement); // Add the removed element to the end
    return arr;
}

// Example usage:
console.log("Array after left rotation by one:", leftRotateByOne([...arr])); // Output: [2, 3, 4, 5, 1]