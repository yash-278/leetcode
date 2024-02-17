function isPalindrome(s: string): boolean {
  let newStr = "";

  for (const letter of s) {
    const code = letter.charCodeAt(0);
    if (
      !(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)
    ) {
      continue;
    }

    newStr = newStr.concat(letter.toLowerCase());
  }

  if (newStr === reverseString(newStr)) return true;

  return false;
}

function reverseString(str: string) {
  return str.split("").reduce((acc, char) => char + acc, "");
}

