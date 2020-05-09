var mySqrt = function(x) {
  var r = 0
  while (!(r*r <=x && (r+1)*(r+1) >x))
  {
    r++;
  }
  return r;
};
console.log(mySqrt(16))