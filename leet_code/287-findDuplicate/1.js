var findDuplicate = function(nums) {
  var res
  let map = new Map()
  for (let i of nums)
  {
    map.set(i, map.has(i)? map.get(i)+1 : 1)
  }
  map.forEach(function(value, key) {
    if (value >=2)
    res = key
  })
  return res
};

console.log(findDuplicate([2,2,2,2,2]))