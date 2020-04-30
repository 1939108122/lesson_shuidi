var isHappy = function(n) {
  let map = new Set();
  while(n != 1){
      if( map.has(n) ) return false
      map.add(n)
      n = String(n).split('').reduce((a,b)=>a+b**2,0)
      // var str = n.toString()
      // var n =0
      // for (var i =0; i<str.length; i++)
      // {
      //   n += parseInt(str[i]*str[i])
      // }
      
  }
  return true
};
console.log(isHappy(20))