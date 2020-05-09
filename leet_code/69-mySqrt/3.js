// 二分法， 永远滴神！

var mySqrt = function(x) {
  if (x ===0 || x===1) return x
  var start =1
  var end = x

  while (start <= end)
  {
    var middle = start + ( (end-start)>>1 )
    if (middle**2 === x)
    {
      return middle
    }
    else if(middle**2 > x)
    {
      end =  middle -1
    }
    else{
      start = middle +1 
    }
  }
  return end

};
console.log(mySqrt(8))