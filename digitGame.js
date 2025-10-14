





// 3232. Find if Digit Game Can Be Won
// Attempted
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of positive integers nums.

// Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

// Return true if Alice can win this game, otherwise, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,10]

// Output: false

// Explanation:

// Alice cannot win by choosing either single-digit or double-digit numbers.

var canAliceWin = function(nums) {
 let single = 0, double = 0;
  
  for (let num of nums) {
    if (num <= 9) {
      single += num;
    } else {
      double += num;
    }
  }
  
  return single !== double;
};

console.log(canAliceWin([1, 2, 3, 4, 10]))

