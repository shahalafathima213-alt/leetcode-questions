// 9. Palindrome Number
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left

var isPalindrome = function(x) {
    let word = x.toString();
    let check = word.split('').reverse().join('');
    return word === check;
  };
  console.log(isPalindrome(121))