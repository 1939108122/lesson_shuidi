var findDuplicate = function(nums) {
  let start = 1
  let end = nums.length - 1
  while (start < end )
  {
    let count = 0
    let mid = (start + end) >> 1
    for (let i = 0; i< nums.length; i++)
    {
      if (nums[i] <= mid ) count++
    }
    if (count > mid)
    {
      end = mid
    }
    else {
      start = mid + 1
    }
  }
  return start
};

console.log(findDuplicate([1,3,4,2,2]))

// https://leetcode-cn.com/problems/find-the-duplicate-number/solution/zhe-ge-shu-zu-you-dian-te-shu-suo-yi-ke-yi-yong-ku/