function isValid(s: string): boolean {
  const splitParenthesis = s.split("");

  const opening = ["{", "(", "["];

  const stack: string[] = [];

  for (const bracket of splitParenthesis) {
    if (opening.includes(bracket)) {
      stack.push(bracket);
      continue;
    } else {
      const opening = getCounterpart(bracket);

      if (stack[stack.length - 1] !== opening) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length > 0 ? false : true;
}

const getCounterpart = (opening: string) => {
  switch (opening) {
    case ")":
      return "(";
    case "]":
      return "[";
    case "}":
      return "{";

    default:
      break;
  }
};