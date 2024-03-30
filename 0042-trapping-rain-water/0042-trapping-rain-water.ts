function trap(height: number[]): number {
  const leftMax: number[] = [];
  const rightMax: number[] = [];
  const minLR: number[] = [];

  let units = 0;

  let temp = 0;

  for (const number of height) {
    leftMax.push(temp);
    temp = Math.max(temp, number);
  }

  temp = 0;

  for (let index = height.length - 1; index >= 0; index--) {
    rightMax.unshift(temp);
    const element = height[index];
    temp = Math.max(element, temp);
  }

  for (let index = 0; index < height.length; index++) {
    minLR.push(Math.min(leftMax[index], rightMax[index]));
  }

  for (let index = 0; index < height.length; index++) {
    const unit = minLR[index] - height[index];

    if (unit > 0) {
      units += unit;
    }
  }

  return units;
}