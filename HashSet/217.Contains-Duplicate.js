/**
 * @param {number[]} nums
 * @return {boolean}
 */

//First method using Map() (exit early if true)
var containsDuplicate = function (nums) {
  const numsSet = new Set();
  for (const i of nums) {
    if (numsSet.has(i)) {
      return true;
    }
    numsSet.add(i);
  }
  return false;
};

const dup = containsDuplicate([1, 2, 3, 1]);
console.log(dup);
