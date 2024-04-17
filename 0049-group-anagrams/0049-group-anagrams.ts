function groupAnagrams(strs: string[]): string[][] {
  const HashMap = new Map<string, string[]>();

  for (const str of strs) {
    let count: number[] = Array(26).fill(0);

    for (const char of str) {
      count[char.charCodeAt(0) - 97] = count[char.charCodeAt(0) - 97] + 1;
    }

    const hashString = count
      .map((num) => `${num.toString()}${String.fromCharCode(num + 97)}`)
      .join("");

    const existingValues = HashMap.get(hashString)?.values();

    if (existingValues) {
      HashMap.set(hashString, [...existingValues, str]);
    } else {
      HashMap.set(hashString, [str]);
    }
  }

  return Array.from(HashMap.values());
}