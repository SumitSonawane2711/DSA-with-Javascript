// https://leetcode.com/problems/valid-triangle-number

// Valid Triangle Number

// brute force approach

var triangleNumber = function(nums) {
    const n = nums.length;
    let count = 0;

    for(let i=0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1; k<n; k++){
                if(nums[i] + nums[j] > nums[k] && nums[i] + nums[k] > nums[j] && nums[j] + nums[k] > nums[i]){
                    count++;
                }
            }
        }
    }
    return count;
}

// optimized approach

var triangleNumber2 = function(nums) {
    const sort = nums.sort((a,b) => a-b);
    const n = sort.length;
    let count = 0;  

    for(let k=n-1; k>=2; k--){
        let left = 0;
        let right = k-1;

        while(left < right){
            if(sort[left] + sort[right] > sort[k]){
                count += right - left;
                right--;
            } else {
                left++;
            }
        }
    }
    return count;
}

// usage example
const nums = [2, 2, 3, 4];
const result = triangleNumber2(nums);
console.log(result); // Output: 3
