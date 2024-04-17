function checkValid(matrix) {
  const row = {};
  const col = {};

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix.length; c++) {
      const element = matrix[r][c];

      if (!row[r]) {
        row[r] = new Set();
      }

      if (!col[c]) {
        col[c] = new Set();
      }

      col[c].add(element);
      row[r].add(element);

      if (c === matrix.length - 1 && row[r].size < matrix.length) {
        return false;
      }

      if (r === matrix.length - 1 && col[c].size < matrix.length) {
        return false;
      }
    }
  }

  return true;
}
