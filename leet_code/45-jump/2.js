var jump = function(nums) {
  var end = 0
  var steps = 0
  var len = nums.length-1;
  var max = 0
  for (var i=0; i<len; i++)
  {
    max = Math.max(max, nums[i] + i)
    if (i == end)
    {
      end = max
      steps++
    }
  }
  return steps
};
console.log(jump([2,3,1,1,4,2,1]))