/** ## INSERTION SORT ALGORITHM

 * The Insertion Sort algorithm uses one part of the array to hold the sorted values, and the other part of the array to hold values that are not sorted yet.
  
 How it works : 
 
 * Take the first value from the unsorted part of the array.
 * Move the value into the correct place in the sorted part of the array.
 * Go through the unsorted part of the array again as many times as there are values.
  
time complexity : O(n^2)
space complexity : O(1)
 */

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]