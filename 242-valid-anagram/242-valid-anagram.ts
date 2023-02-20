function isAnagram(s: string, t: string): boolean {
  const newS = s.split("").sort();
  const newT = t.split("").sort();
  if (newS.length !== newT.length) {
    return false;
  }
  for (let i = 0; i <= newS.length; i++) {
    if (newS[i] === newT[i]) {
      continue;
    }
    return false;
  }

  return true;
}
