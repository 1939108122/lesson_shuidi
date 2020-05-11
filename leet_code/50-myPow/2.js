var myPow = function(x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  if (n < 0)
  {
   return 1/myPow(x,-n);
  }
  if (n%2 === 0)
  {
    var cur = myPow(x, n/2)
    return cur*cur
  }
  else {
    return x*myPow(x, (n-1))
   
  }
};

console.log(myPow(2, 7))