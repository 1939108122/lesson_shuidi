var singleNumbers = function(nums) {
  var obj = {}
  nums.forEach(count => {
      let attr = count //这样事件更短？
      obj[attr] ? delete obj[attr] :(obj[attr] = 1)
  })
  // console.log(obj)
  return Object.keys(obj)
  };

  console.log(singleNumbers([4,1,4,6]))