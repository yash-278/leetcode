class MinStack {
  constructor() {}

  stack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    let min = this.stack[0];
    for (const num of this.stack) {
      if (num < min) {
        min = num;
      }
    }

    return min;
  }
}