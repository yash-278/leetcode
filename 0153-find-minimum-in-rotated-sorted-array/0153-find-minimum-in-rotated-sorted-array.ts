function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  let min = nums[0];

  while (left <= right) {
    if (nums[left] < nums[right]) {
      min = Math.min(min, nums[left]);
      break;
    }

    let mid = Math.round((left + right) / 2);
    min = Math.min(min, nums[mid]);

    if (nums[mid] >= left) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return min;
}