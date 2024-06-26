function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.round((left + right) / 2);

  while (left <= right) {
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
      mid = Math.round((left + right) / 2);
      continue;
    }

    if (nums[mid] < target) {
      left = mid + 1;
      mid = Math.round((left + right) / 2);
      continue;
    }
  }

  return -1;
}