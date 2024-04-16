function largestRectangleArea(heights: number[]): number {
  const heightStack: { index: number; height: number }[] = [];

  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    const element = heights[i];

    let popHeight: { index: number; height: number } | undefined;

    while (heightStack.length > 0 && heightStack[heightStack.length - 1].height > element) {
      popHeight = heightStack.pop();

      if (!popHeight) break;

      const area = (i - popHeight.index) * popHeight.height;

      if (area > maxArea) {
        maxArea = area;
      }
    }

    heightStack.push({ height: element, index: popHeight ? popHeight.index : i });
  }

  for (const stackObj of heightStack) {
    const area = (heights.length - stackObj.index) * stackObj.height;

    if (area > maxArea) {
      maxArea = area;
    }
  }

  return maxArea;
}