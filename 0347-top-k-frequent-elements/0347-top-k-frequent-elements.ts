function topKFrequent(nums: number[], k: number): number[] {
  const hashMap = new Map<number, number>();
  const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  nums.forEach((num) => {
    hashMap.set(num, 1 + (hashMap.get(num) ?? 0));
  });

  hashMap.forEach((c, n) => {
    freq[c] = [...freq[c], n];
  });

  const res: number[] = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) return res;
    }
  }

  return [];
}
