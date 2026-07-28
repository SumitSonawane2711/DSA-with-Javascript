// https://leetcode.com/problems/valid-palindrome


// brute force approach
var isPalindrome = function(s) {
    // 1. Convert to lowercase and strip out all non-alphanumeric characters
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // 2. Reverse the individual characters, not the words
    const reversed = cleaned.split("").reverse().join("");

    // 3. Return the comparison directly
    return cleaned === reversed;
};

// optimized approach : two pointer approach

var isPalindrome2 = function(s) {

    let left = 0;
    let right = s.length-1

    const isAlnum = (char) => /[a-z0-9]/i.test(char);

    while(left<right){

        if(!isAlnum(s[left])){
            left++
            continue
        }

         if(!isAlnum(s[right])){
            right--
            continue
        }

        if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false
        }

        left++;
        right--;
    }
    return true
};

// usage example
const inputString = "A man, a plan, a canal: Panama";
const result = isPalindrome(inputString);
console.log(result); // Output: true