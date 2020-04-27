var search = function(nums, target) {
  var len = nums.length
  if (len <= 0) return -1
  var start = 0
  var end = len-1 
  while (start <= end)
  {
    var mid = (start+end)>>1  //右移运算符取中间值
    if (nums[mid] === target) return mid
    if (nums[mid] >= nums[start]) // 有序部分在mid左边
    {
      if (target >= nums[start] && target <= nums[mid]) // target 在start和mid之间
      {
        end = mid-1
      }else{
        start = mid+1
      }

    }else {  // 有序部分在右边
      if (target >= nums[mid] && target <= nums[end]) // target在mid和end之间
      {
        start = mid+1
      }else{
        end = mid-1
      }
    }

  }
  return -1
}
console.log(search([4,5,6,7,0,1,2], 0))