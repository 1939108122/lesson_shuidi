var maxSubArray = function(nums) {
  var sum = 0;
  var res = nums[0];
  for (num of nums)
  {
    if (sum>0)
    {
      sum += num;
    }
    else{
      sum = num
    }
    res = Math.max(res, sum)
  }
  return res;
}
console.log(maxSubArray([-1,-2]))