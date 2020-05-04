var jump = function(nums) {
  // 从后往前找
  var steps = 0;
  var position = nums.length -1
  while (position >0)
  {
    for (var i =0; i<position; i++)
    {
      if (i + nums[i] >=position)
      {
        position = i
        steps++
        break
      }
    }
  }
  return steps
};
console.log(jump([2,3,1,1,4]))