function containsDuplicate(nums: number[]): boolean {
  // Loop through all the array and create a Map, If key exists return true, else set the number as key
  let map = new Map();
  for (let i = 0; i <= nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], nums[i]);
  }

  return false;
}
