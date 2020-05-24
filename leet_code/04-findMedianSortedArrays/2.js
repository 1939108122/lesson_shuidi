var findMedianSortedArrays = function(nums1, nums2) {
  nums1 = nums1.concat(nums2)

  nums1.sort( (a, b) =>{
    return a - b
  })

  let mid = (nums1.length -1) >> 1
  return nums1.length % 2 !== 0 ? nums1[mid] : (nums1[mid] + nums1[mid+1]) / 2
}

console.log(findMedianSortedArrays([2], [1, 3]))

