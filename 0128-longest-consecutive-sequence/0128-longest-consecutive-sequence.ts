function longestConsecutive(nums: number[]): number {
  let longestConsecutive = 0;

  const numSet = new Set(nums);

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let length = 0;
      while (numSet.has(num + length)) {
        length += 1;
      }

      longestConsecutive = Math.max(length, longestConsecutive);
    }
  }

  return longestConsecutive;
}