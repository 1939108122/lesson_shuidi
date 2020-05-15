var subarraySum = function(nums, k) {
 let count = 0
 let len = nums.length
 for (var i = 0; i<len; i++)
 {
   let sum = 0
   for (var j = i; j>=0; j--)
   {
    sum += nums[j]
     if (sum ===k)
     {
      count++
     }

   }
 }
 return count
};

console.log(subarraySum([2,3,5,6], 8))

// 时间复杂度O(n^2) 空间复杂度O(1)