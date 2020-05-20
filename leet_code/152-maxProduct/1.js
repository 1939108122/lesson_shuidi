function maxProduct(nums)
{
  let res = nums[0]
  let preMin = nums[0]
  let preMax = nums[0]
  for (let i=1; i<nums.length; i++)
  {
    t1 = preMin*nums[i]
    t2 = preMax*nums[i]
    preMin = Math.min(t1, t2, nums[i])
    preMax = Math.max(t1, t2, nums[i])
    res = Math.max(preMax, res)
  }
  return res
}
console.log(maxProduct([2,3,-5,-8]))