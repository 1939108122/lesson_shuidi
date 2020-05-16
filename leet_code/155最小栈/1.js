var MinStack = function() {
this.stack = []
this.minStack = []
};


MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if (x <= this.minStack[this.minStack.length-1] || this.minStack.length === 0)
  {
    this.minStack.push(x)
  }
};


MinStack.prototype.pop = function() {
  var m = this.stack.pop()
  if (m === this.minStack[this.minStack.length-1])
  {
    this.minStack.pop()
  }
};


MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1]
};

MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length-1]
};
