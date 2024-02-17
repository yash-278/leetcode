function isPalindrome(s: string): boolean {
  let newStr = "";

  let leftPointer = 0;
  let rightPointer = s.length - 1;

  let isPalindrome = true;

  while (leftPointer <= rightPointer) {
    if (
      !(s.charCodeAt(leftPointer) > 47 && s.charCodeAt(leftPointer) < 58) &&
      !(s.charCodeAt(leftPointer) > 64 && s.charCodeAt(leftPointer) < 91) &&
      !(s.charCodeAt(leftPointer) > 96 && s.charCodeAt(leftPointer) < 123)
    ) {
      leftPointer += 1;
      continue;
    }

    if (
      !(s.charCodeAt(rightPointer) > 47 && s.charCodeAt(rightPointer) < 58) &&
      !(s.charCodeAt(rightPointer) > 64 && s.charCodeAt(rightPointer) < 91) &&
      !(s.charCodeAt(rightPointer) > 96 && s.charCodeAt(rightPointer) < 123)
    ) {
      rightPointer -= 1;
      continue;
    }

    if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
      isPalindrome = false;
    }

    leftPointer += 1;
    rightPointer -= 1;
  }

  return isPalindrome;
}