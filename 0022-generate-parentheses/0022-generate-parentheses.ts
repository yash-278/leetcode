function generateParenthesis(n: number): string[] {
  //  Only add open parenthesis if open < n
  // only add a closing parenthesis if closed < open
  // valid IIF open == closed == n

  const stackArr: string[] = [];
  const ansArr: string[] = [];

  const backTracking = (openN: number, closedN: number) => {
    if (openN === n && closedN === n) {
      ansArr.push(stackArr.join(""));
      return;
    }

    if (openN < n) {
      stackArr.push("(");
      backTracking(openN + 1, closedN);
      stackArr.pop();
    }

    if (closedN < openN) {
      stackArr.push(")");
      backTracking(openN, closedN + 1);
      stackArr.pop();
    }
  };

  backTracking(0, 0);

  return ansArr;
}
