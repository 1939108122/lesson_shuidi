var kidsWithCandies = function(candies, extraCandies) {
  var max = candies[0]
  var len = candies.length
  var arr = []
  for (var i = 1; i< len; i++)
  {
    if (candies[i] > max)
    {
      max = candies[i]
    }
  }
  for (var i = 0; i< len; i++)
  {
    if (candies[i] < max)
    {
      candies[i] + extraCandies >= max? arr.push(true) : arr.push(false)
    }
    else{
      arr.push(true)
    }
  }
  return arr
};

console.log(kidsWithCandies([5,5,5,5,5], 5))

// 执行用时 : 100 ms , 在所有 JavaScript 提交中击败了 5.99% 的用户
// 内存消耗 :36.3 MB , 在所有 JavaScript 提交中击败了100.00%的用户