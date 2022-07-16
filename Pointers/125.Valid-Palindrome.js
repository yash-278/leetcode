//* Neetcode Explanation : https://www.youtube.com/watch?v=jJXJ16kPFWg
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const palindromeCheck = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  function reverseString(str) {
    return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
  }
  const reverseStringCheck = reverseString(palindromeCheck);

  if (palindromeCheck === reverseStringCheck) return true;

  return false;
};

/**
 * * Time Complexity : O(n)
 * * Space Complexity : O(n)
 */

/*============================================================
=============            Second Solution          ============
=============================================================*/

const ALPHA_NUM = /^[a-zA-Z0-9]$/;

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindromeLoop = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !ALPHA_NUM.test(s[l])) {
      l++; // If it's not Alphanumeric move pointer
    }
    while (l < r && !ALPHA_NUM.test(s[r])) {
      r--; // If it's not Alphanumeric move pointer
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};

/**
 * * Time Complexity : O(n)
 * * Space Complexity : O(1)
 */

console.log("====================================");
console.log(isPalindromeLoop("A man, a plan, a canal: Panama"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log("====================================");
