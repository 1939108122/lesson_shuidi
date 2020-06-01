var b = [1,2,3];
var c = b.map(function(v){ return v*100} )
console.log(c);   //[100, 200, 300]

console.log(b)

// map返回一个由原数组每个元素执行回调函数的结果组成的新数组。不会改变原数组