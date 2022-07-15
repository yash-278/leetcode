//* Neetcode Explanation : https://www.youtube.com/watch?v=KLlXCFG5TnA
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let prevMap = {}; //Init empty Hashmap

  for (let index = 0; index < nums.length; index++) {
    //Subracting target with Current Number & checking against previous entries in Hashmap
    if (target - nums[index] in prevMap) {
      return [prevMap[target - nums[index]], index];
    } else {
      prevMap[nums[index]] = index; //Add if no previous entries present
    }
  }
};

console.log("====================================");
console.log(twoSum([2, 7, 11, 15], 9));
console.log("====================================");

/**
 * * Time Complexity : O(n)
 * * Space Complexity : O(n)
 */
