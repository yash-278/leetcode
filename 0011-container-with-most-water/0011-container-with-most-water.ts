function maxArea(heightArr: number[]): number {
  let left = 0;
  let right = heightArr.length - 1;

  let area = 0;

  while (left < right) {
    const height = Math.min(heightArr[left], heightArr[right]);
    const width = right - left;

    area = Math.max(height * width, area);

    if (heightArr[left] >= heightArr[right]) {
      right -= 1;
      continue;
    }

    if (heightArr[right] >= heightArr[left]) {
      left += 1;
      continue;
    }
  }
  return area;
}