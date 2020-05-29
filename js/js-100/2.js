console.log(['1','2','3'].map(parseInt))  //map 遍历每个 item时会返回值和下标给 parseInt
console.log(['1','2','3'].map(Number))

console.log([1,2,3].map(String))

let unary = fn => val => fn(val)

let parse = unary(parseInt)

console.log(['1','2','3'].map(parse))