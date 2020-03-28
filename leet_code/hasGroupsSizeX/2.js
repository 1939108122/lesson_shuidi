var map = new Map()
var deck = [1,3,2,2,1]
deck.forEach (i =>
{
  map.set(i, map.has(i)? map.get(i)+1 :1)
}
)
map.forEach(function (value, key) {
  console.log(key,value)
  }
)
let mapArr = [...map.values()]
let a = [...map.keys()]
console.log(map)
// console.log(mapArr)
// console.log(a)