/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let initial;

  let runningArray = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (index === 0) {
      initial = nums[index];
    } else {
      initial = initial + element;
    }
    runningArray.push(initial);
  }

  return runningArray;
};

const sum = runningSum([1, 2, 3, 4]);
console.log(sum);
