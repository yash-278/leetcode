function twoSum(numbers: number[], target: number): number[] | undefined {
  let maxCheckLen = numbers.length;

  for (let index = 0; index < maxCheckLen; index++) {
    for (let j = index + 1; j < maxCheckLen; j++) {
      if (numbers[index] + numbers[j] === target) {
        return [index + 1, j + 1];
      }
      if (numbers[index] + numbers[j] > target) {
        maxCheckLen = j;
      }
    }
  }
}