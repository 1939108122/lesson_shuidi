var subarraySum = function (nums, k) {
  let map = new Map()
  let count = 0
  let sum = 0
  map.set(0, 1)
  let len = nums.length
  for (var i = 0; i < len; i++)
  {
    sum += nums[i]
    let sum1 = sum -k
    if (map.has(sum1))
    {
      count += map.get(sum1)
    }
    map.has(sum)? map.set(sum, map.get(sum)+1): map.set(sum, 1)
  }
  return count
};
console.log(subarraySum([1,1,1],2))
// 时间复杂度O(n) 空间复杂度O(n)