var hasGroupsSizeX = function(deck) {
  var map = new Map(),
      res 
  if (deck.length < 2) return false
  for (let i of deck)
  {
    map.set(i, map.has(i)? map.get(i)+1 :1)
  }
  var count = 1
  map.forEach(function (value, key) {
    if(count == 1)
    {
      res = value
    }else {
      res = gcd(res, value)
    }
    count++
  })
  return res == 1? false: true
  function gcd (m,n)
  {
    if(m%n == 0) return n
    return gcd(n, m%n)
  }
};
console.log(hasGroupsSizeX([1,3,2,2,1]))