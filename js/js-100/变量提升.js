let name = 'Lydia'

function getName () {
  console.log(name)

  let name = 'Sarah'
}

getName();

//  ReferenceError: Cannot access 'name' before initialization (引用错误： 无法在初始化之前访问 'name')

// 每个函数都有自己的执行上下文， getName函数首先在其自身的上下文内查找，查看是否有变量 name，
// 带有 let 关键字 (和const) 的变量被提升， 但是与 var 不同，他不会被初始化， 在我们初始化之前，无法访问他们
// 当我们尝试在声明变量之前 访问变量时， JavaScript会抛出 ReferenceError


// 如果我们不在getName函数中声明 name变量， 则JavaScript引擎会查看原型链，会找到其外部作用域有一个名为name
// 的变量，并打印 Lydia

// 如下：
// let name = 'Lydia'

// function getName () {
//   console.log(name)
// }

// getName();  // Lydia
