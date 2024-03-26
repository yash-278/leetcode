function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const triplets: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    const element = nums[i];
    if (i > 0 && element === nums[i - 1]) continue;

    const twoSumTarget = 0 - nums[i];

    const combos = twoSum(nums.slice(i + 1, nums.length), twoSumTarget);
    for (const couple of combos) {
      if (element + couple[0] + couple[1] === 0) {
        triplets.push([element, couple[0], couple[1]]);
      }
    }
  }

  return triplets;
}

function twoSum(nums: number[], target: number) {
  let left = 0,
    right = nums.length;

  const targetArray: number[][] = [];

  while (left < right) {
    if (nums[left] !== 0 && nums[left] === nums[left - 1]) {
      left += 1;
      continue;
    }
    if (nums[right] !== nums.length && nums[right] === nums[right + 1]) {
      right -= 1;
      continue;
    }
    if (nums[left] + nums[right] === target) {
      targetArray.push([nums[left], nums[right]]);
      left += 1;
      right -= 1;
    }
    if (nums[left] + nums[right] > target) {
      right -= 1;
      continue;
    }
    if (nums[left] + nums[right] < target) {
      left += 1;
      continue;
    }
  }
  return targetArray;
}
