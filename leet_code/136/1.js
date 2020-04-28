var singleNumber = function(nums) {
  var tmp = 0
  nums.forEach(item=> {
  tmp^=item
})
  return tmp
};