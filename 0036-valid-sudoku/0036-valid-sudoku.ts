function isValidSudoku(board: string[][]): boolean {
  const row = {};
  const col = {};
  const squareSet = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c];

      if (num === ".") {
        continue;
      }

      const grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

      if (!row[r]) {
        row[r] = new Set();
      }

      if (!col[c]) {
        col[c] = new Set();
      }

      if (!squareSet[grid]) {
        squareSet[grid] = new Set();
      }

      if (row[r].has(num) || col[c].has(num) || squareSet[grid].has(num)) {
        return false;
      }

      col[c].add(num);
      row[r].add(num);
      squareSet[grid].add(num);
    }
  }

  return true;
}
