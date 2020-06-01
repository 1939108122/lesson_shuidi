// 改良版

var kidsWithCandies = function(candies, extraCandies) {
  var max = Math.max(...candies) - extraCandies
  var arr = candies.map(item=> {return item >= max})
  return arr

};

console.log(kidsWithCandies([1,5,6,7,2], 5))


// 执行用时 : 68 ms , 在所有 JavaScript 提交中击败了81.14% 的用户
// 内存消耗 : 33 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户