/** BUBBLE SORT ALGORITHM
 * 
 * sorts an array from the lowest value to the highest value. 

How it works :

* Go through the array, one value at a time.
* For each value, compare the value with the next value.
* If the value is higher than the next one, swap the values so that the highest value comes last.
* Go through the array as many times as there are values in the array.

time complexity : O(n^2)
space complexity : O(1)
 */

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                // let temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;

                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]