console.log(['1','2','3'].map(parseInt)) // [1, NaN, NaN]
console.log(['1','2','3'].map(Number))   // [1, 2, 3]

console.log([1,2,3].map(String))         // ['1','2', '3']


let unary = fn => val => fn(val)

// 上面代码可展开为如下代码
// let unary = (fn) => {
//   return (val) => {
//     return fn(val)
//   }
// }
let parse = unary(parseInt)

console.log(['1','2','3'].map(parse))  //[1, 2, 3]
// 这是将parseInt方法装换为只接收一个参数，便可以实现结果



// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一次提供的函数后的返回值。
// callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身,而parseInt接受两个参数


// parseInt(string, radix); 
// String要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。
// radix 可选
// 从 2 到 36，代表该进位系统的数字。例如说指定 10 就等于指定十进位。请注意，通常预设值不是 10 进位！


//  console.log(['1','2','3'].map(parseInt)) 
// parseInt('1', 0)    第一个参数则是map遍历数组的第一个元素值，第二个则是数组下标，
// parseInt('2', 1)     但是parseInt会将第二个参数当成进制，将'1' 10进制转换还是1， 
// parseInt('3', 2)     '2' 转换1进制为 NaN  '3' 转二进制也为 NaN
