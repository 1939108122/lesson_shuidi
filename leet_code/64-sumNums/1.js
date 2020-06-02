var sumNums = function(n) {
  var arr = []
  for (var i = 0; i < n; i++)
  {
    arr.push(i+1)
  }
  return arr.reduce((a, b) => a+b)
};

console.log(sumNums(5))

// 执行用时 :68 ms, 在所有 JavaScript 提交中击败了54.38%的用户
// 内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户