var sortArray = function(nums) {
var len = nums.length
for(var i =1; i<len; i++)
{
  var cur = nums[i]
  for(j= i-1; j>=0 && nums[j]>cur; j--)
  {
    nums[j+1] = nums[j]

  }
  nums[j+1] = cur
}
return nums
};
console.log(sortArray([12,8,23,15,89,56]))