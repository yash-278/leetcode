function productExceptSelf(nums: number[]): number[] {
  const resArr: number[] = [];
  let multiple = 1;

  nums.forEach((num) => {
    resArr.push(multiple);
    multiple = multiple * num;
  });

  multiple = 1;

  for (let index = nums.length - 1; index >= 0; index--) {
    resArr[index] = resArr[index] * multiple;
    multiple = multiple * nums[index];
  }

  return resArr;
}
