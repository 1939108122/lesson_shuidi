var findInMountainArray = function(target, mountainArr) {
  // 先找峰值，再在峰值左右查找target
  var start = 0
  var end = mountainArr.length()-1
  var mid = start +((end - start)>>1)
  while (start <= end)
  {
    if (mountainArr.get(mid) < mountainArr.get(mid+1))
    {
      start = mid+1
    }else {
      end = mid-1
    }
    mid = start +((end - start)>>1)
  }
  // 结束 start>end时 start就是峰值的下标
  res = middleSearch(mountainArr, 0, start, target, true) //峰值左边查找target
  res=== -1 &&( res = middleSearch(mountainArr, start, mountainArr.length()-1, target, false)) //左边没找到就峰值右边查找
  return res


  function middleSearch(mountainArr, start, end, target, flag) {
    var mid = start +((end - start)>>1)
    while (start <= end)
    {
      var midValue = mountainArr.get(mid)
      if(midValue === target) return mid 
      if ( midValue < target) 
      {
        flag?start = mid+1:end = mid-1
      }else{
        flag?end = mid-1:start = mid+1
      }
      mid = start +((end - start)>>1)
    }
    return -1
  }
};
