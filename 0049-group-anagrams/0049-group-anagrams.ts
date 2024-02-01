function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const el of strs) {
    let count = new Array(26).fill(0);

    el.split("").forEach((char) => {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    });

    const data = map.get(count.toString());

    if (data) {
      map.set(count.toString(), [...data, el]);
    } else {
      map.set(count.toString(), [el]);
    }
  }

  return Array.from(map.values());
}