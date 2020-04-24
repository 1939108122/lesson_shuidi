var findRepeatNumber = function(nums) {
  var len = nums.length
  if(len<=0) return false
  for(var i=0;i<len; i++)
  {
    if(nums[i]<0 || nums[i] > len-1) return false
  }
  for (var i =0; i<len; i++) {
    while (nums[i] !== i)
    {
      if (nums[i] === nums[nums[i]])
      {
        return nums[i]
      }
       var tmp = nums[i]
      nums[i] = nums[tmp]
      nums[tmp] = tmp
    }  
  }
  return false  
}
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
