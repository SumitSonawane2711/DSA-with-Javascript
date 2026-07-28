// https://leetcode.com/problems/container-with-most-water

// container with most water

// brute force approach

var maxArea = function(height) {
    let max = 0;
    const n = height.length;

    for(let i = 0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            const area = Math.min(height[i], height[j]) * (j-i);
            max = Math.max(max, area);
        }
    }
    return max;
};

// optimized approach

var maxArea2 = function(height) {
    let max = 0;
    const n = height.length;
    let left = 0;
    let right = n-1;

    while(left < right){
        const area = Math.min(height[left], height[right]) * (right-left);
        max = Math.max(max, area);

        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }
    return max;
}

// usage example
const height = [1,8,6,2,5,4,8,3,7];
const result = maxArea2(height);
console.log(result); // Output: 49