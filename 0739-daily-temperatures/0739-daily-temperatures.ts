function dailyTemperatures(temperatures: number[]): number[] {
  const temperaturesArr = Array.from({ length: temperatures.length }, () => 0);

  const diffStack: number[][] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const element = temperatures[i];

    while (diffStack.length > 0 && diffStack[diffStack.length - 1][0] < element) {
      temperaturesArr[diffStack[diffStack.length - 1][1]] = i - diffStack[diffStack.length - 1][1];
      diffStack.pop();
    }

    diffStack.push([element, i]);
  }

  return temperaturesArr;
}
