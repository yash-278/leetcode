function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  let curr = nums[0];

  let longestConsecutive = 1;

  let currentConsecutive = 1;

  const numSet = new Set(nums);

  for (const num of numSet) {
    curr = num;

    if (numSet.has(curr - 1)) {
      continue;
    }

    let next = curr;

    for (let index = 0; index < nums.length; index++) {
      if (numSet.has(next + 1)) {
        currentConsecutive += 1;
        next += 1;
      } else {
        if (currentConsecutive > longestConsecutive) {
          longestConsecutive = currentConsecutive;
          currentConsecutive = 1;
          break;
        } else {
          currentConsecutive = 1;
          break;
        }
      }
    }
  }

  return longestConsecutive;
}