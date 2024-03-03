function containsDuplicate(nums: number[]): boolean {
  const checkMap = new Map();

  for (const num of nums) {
    if (checkMap.has(num)) return true;
    checkMap.set(num, num);
  }

  return false;
}
