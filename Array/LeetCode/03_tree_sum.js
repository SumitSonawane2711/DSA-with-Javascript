// https://leetcode.com/problems/3sum

// brute force approach

var threeSum = function(nums) {
    const n = nums.length;
    let result = []

    for (let i = 0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1; k<n; k++){
                if(nums[i]+nums[j]+nums[k] == 0){
                    result.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    return result
};

// optimized approach

var threeSum2 = function(nums) {
    const sort = nums.sort((a,b) => a-b);
    const n = sort.length;
    let result = []

    for (let i = 0; i<n-2; i++){
        if(i>0 && sort[i] == sort[i-1]){
            continue
        }

        let left = i+1;
        let right = n-1;

        while(left < right){
            const sum = sort[i] + sort[left] + sort[right];

            if(sum == 0){
                result.push([sort[i], sort[left], sort[right]]);

                while(left < right && sort[left] == sort[left+1]){
                    left++;
                }
                while(left < right && sort[right] == sort[right-1]){
                    right--;
                }

                left++;
                right--;
            } else if(sum < 0){
                left++;
            }
            else {
                right--;
            }
        }
    }

    return result
};


// usage example
const inputArray = [-1, 0, 1, 2, -1, -4];
const result = threeSum(inputArray);
console.log(result); // Output: [[-1, 0, 1], [-1, -1, 2]]