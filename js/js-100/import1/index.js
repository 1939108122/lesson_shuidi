import myCounter from './counter'

myCounter +=1
console.log(myCounter)

// throw error 
// 引入模块是只读的，不能修改引入的模块，只有导出他们的模块才能修改其值

// 当我们给 myCounter增加一个值的时候会抛出一个异常，myCounter是只读的， 不能被修改