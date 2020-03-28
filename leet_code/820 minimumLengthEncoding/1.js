var minimumLengthEncoding = function (words) {
  var hashSet = new Set(words)
  hashSet.forEach( item=> {
    for(var i =1;i <item.length; i++)
    {
      var target = item.slice(i)
      hashSet.has(target)&& hashSet.delete(target)
    }
  })
  
  var result = 0
  for(var item of hashSet)
  {
    result = (item.length +1) + result
  }
  return result
}
console.log(minimumLengthEncoding(['time', 'me', 'bell']))
