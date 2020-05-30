console.log(Number(2) === Number(2))

console.log(Boolean(false) === Boolean(false))

console.log(Symbol('foo') === Symbol('foo'))

//  true  true false

// 每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的

// Symbol("foo") 不会强制将字符串 “foo” 转换成symbol类型。它每次都会创建一个新的 symbol类型