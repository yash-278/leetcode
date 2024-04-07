class MinStack {
  constructor() {}

  stack: number[][] = [];
  min;

  push(val: number): void {
    if (this.stack.length === 0) {
      this.min = val;
    } else if (val < this.min) {
      this.min = val;
    }
    this.stack.push([val, this.min]);
  }

  pop(): void {
    this.stack.pop();
    if (this.stack.length > 0) {
      this.min = this.stack[this.stack.length - 1][1];
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1][0];
  }

  getMin(): number {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
