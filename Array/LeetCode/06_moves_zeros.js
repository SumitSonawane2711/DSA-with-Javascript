// https://leetcode.com/problems/move-zeroes

// Move Zeroes

// brute force approach

var moveZeroes = function(nums) {
    const n = nums.length;
    let result = [];


    for(let i=0; i<n; i++){
        if(nums[i] != 0){
            result.push(nums[i]);
        }
    }

    for(let i=0; i<n; i++){
        if(i < result.length){
            nums[i] = result[i];
        } else {
            nums[i] = 0;
        }
    }

    return nums;
}

// optimized approach

var moveZeroes2 = function(nums) {
    const n = nums.length;
    let slow = 0;

    for(let fast=0; fast<n; fast++){
        if(nums[fast] != 0){
            // swap nums[slow] and nums[fast]
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        } 
    }

    return nums;
    
}
    