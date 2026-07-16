/**
 ## SELECTION SORT ALGORITHM

 * The algorithm looks through the array again and again, moving the next lowest values to the front, until the array is sorted. 
  
 How it works : 
 
 * Go through the array to find the lowest value.
 * Move the lowest value to the front of the unsorted part of the array.
 * Go through the array again as many times as there are values in the array.
  
time complexity : O(n^2)
space complexity : O(1)
 */

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]