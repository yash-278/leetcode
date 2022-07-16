/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // RHS = Sum of Array
  let RHS = sum(nums);

  // Sum of whole Array
  function sum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) sum += nums[i];
    return sum;
  }

  // LHS = 0
  let LHS = 0;

  //  Then Iterate through the array and keep updating the RHS sum which is initialized as zero.
  // In the loop, we can get right sum by subtracting the elements one by one.
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    console.log("====================================");
    console.log("Initial " + LHS + " " + RHS);

    RHS -= element;
    if (LHS === RHS) {
      console.log("Corrected " + LHS + " " + RHS);

      return index;
    }
    LHS += element;

    console.log("Corrected " + LHS + " " + RHS);
    console.log("====================================");
  }

  return -1;
};

const pivot = pivotIndex([1, 7, 3, 6, 5, 6]);
