// Find the second largest element

const Arr = [4, 8, 2, 10, 5];

function findSecondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}

// Example usage:
const secondLargest = findSecondLargest(Arr);
console.log("second largest :" , secondLargest); // Output: 8

// Find the second smallest element

function findSecondSmallest(arr) {
    let min = Infinity;
    let secondMin = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i];
        }
    }
    return secondMin;
}

// Example usage:
const secondSmallest = findSecondSmallest(Arr);
console.log("second smallest :" , secondSmallest); // Output: 4