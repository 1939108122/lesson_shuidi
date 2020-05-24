var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  let mid1 = (len1-1)>>1  //nums1 的中位数下标（前提数组长度为奇数）
  let mid2 = (len2-1)>>1  //nums2 的中位数下标（前提数组长度为奇数）
  let m1, m2

  if (len1 === 0) //判断任一数组为空
  {
    if (len2 % 2 !== 0)
    {
      return nums2[mid2]
    } else {
      return (nums2[mid2] + nums2[mid2 + 1]) / 2
    }
  }

  if (len2 === 0)
  {
    if (len1 % 2 !== 0)
    {
      return nums1[mid1]
    } else {
      return (nums1[mid1] + nums1[mid1 + 1]) / 2
    }
  }
   // 判断两个数组的奇偶性并求出中位数
  if (len1 % 2 === 0)
  {
    m1 = (nums1[mid1] + nums1[mid1 + 1]) / 2

  } else {
    m1 = nums1[mid1]
  }

  if (len2 % 2 === 0)
  {
    m2 = (nums2[mid2] + nums2[mid2 + 1]) / 2

  } else {
    m2 = nums2[mid2]
  }
  
  return (m1 + m2) / 2
};

console.log(findMedianSortedArrays([3], [-2, -1]))

// 没太看懂题目所指的中位数什么意思... 难道不是奇数数组找中间那个，偶数数组中间两个加起来除以二？