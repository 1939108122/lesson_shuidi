var isHappy = function(n) { 
  // var arr = []
  // str = n.toString()
  // return (parseInt(str[0]) +parseInt(str[1]))
  var sum = 0
  var map = new Map()
 return invaildHappy(n)

  function invaildHappy(n) {
    if (n === 1) return true
    if (map.has(n)) return false
    map.set(n,true)
    var str = n.toString()
    for (var i =0; i<str.length; i++)
    {
      sum += parseInt(str[i]*str[i])
    }
    invaildHappy(sum)
  }
};
console.log(isHappy(19))