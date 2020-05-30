console.log(`${(x => x)('I love')} to program`)

// 带有模板字面量的表达式首先被执行，相当于字符串会包含表达式
// 这个立即执行函数 (x => x)('I love) 返回的值，我们向箭头函数
//  x => x 传递 'I love' 作为参数， x等价于返回的 'I love'
// 所以输出结果 I love to program