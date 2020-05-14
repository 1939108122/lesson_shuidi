var singleNumber = function(nums) {
  var map = new Map()
  var N 
  nums.forEach(i => {
    map.set(i, map.has(i)? map.get(i)+1:1)
  })
  // console.log(map)

  map.forEach(function (key, value) {
    if (key === 1)
    {
      N = value
    }
    // console.log(value, key)
  })
  return N
};
console.log(singleNumber([4,1,2,1,2]))