
// Code
// Testcase
// Test Result
// Test Result
// 977. Squares of a Sorted Array
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].


var sortedSquares = function(nums) {
   let c=nums.map(x=>Math.pow(x,2));
    c.sort((a,b)=>a-b);
    return c;
 };
console.log(sortedSquares([-4,-1,0,3,10]));
