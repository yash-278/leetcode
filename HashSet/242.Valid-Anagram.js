/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false; // Check the length
  let sMap = {}; // Initialize Empty Objects
  let tMap = {};
  for (let index = 0; index < s.length; index++) {
    if (sMap.hasOwnProperty(s[index])) {
      sMap[s[index]]++; //Add new prop if not present already
    } else {
      sMap[s[index]] = 1; //Increment if already present
    }
    if (tMap.hasOwnProperty(t[index])) {
      tMap[t[index]]++; //Add new prop if not present already
    } else {
      tMap[t[index]] = 1; //Increment if already present
    }
  }
  for (let k in sMap) {
    if (sMap[k] !== tMap[k]) {
      return false;
    }
  }
  return true;
};

const s = "anagram";
const t = "nagaram";

console.log("====================================");
console.log(isAnagram(s, t));
console.log("====================================");
