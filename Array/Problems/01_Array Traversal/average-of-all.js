// Average of all elements

const Arr = [4, 8, 2, 10, 5];

function averageOfAll(arr) {    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Example usage:
const avg = averageOfAll(Arr);
console.log("Average of all elements:", avg); // Output: 5.8