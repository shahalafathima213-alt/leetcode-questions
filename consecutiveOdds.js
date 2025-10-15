// 1550. Three Consecutive Odds
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

// Example 1:

// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

var threeConsecutiveOdds = function(arr) {
    let count=0;
    for(let num of arr){
        if(num%2!==0){
        count++;
        if(count===3)return true;
        }else{
           count=0; 
        }
    }
    return false;

};
console.log(threeConsecutiveOdds([2,6,4,1]));

