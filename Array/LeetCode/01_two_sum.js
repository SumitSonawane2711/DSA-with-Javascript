// https://leetcode.com/problems/two-sum?envType=problem-list-v2&envId=array

// brute force approach
var twoSum = function(nums, target) {
    let n = nums.length;

    for(let i = 0; i<n-1; i++){
        for(let j = i+1; j<n-1; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }

        return -1;
    }
};

// optimized approach

var twoSum2 = function(nums, target) {

    const n = nums.length;
    let left = 0;
    let right = n-1;

    while(left < right){
        const sum = nums[left] + nums[right];
        if(sum == target){
            return [left, right];
        } else if(sum < target){
            left++;
        } else {
            right--;
        }
    }
    return [];
}

const array = [3,2,4,3,4,5,6,7,8,9];
const target = 7;

const ans = twoSum(array, target)

console.log(ans)