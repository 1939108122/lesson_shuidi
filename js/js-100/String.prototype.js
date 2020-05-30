String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!'
}

const name = 'Lydia'

console.log(name.giveLydiaPizza())

// Just give Lydia pizza already!

// String是一个内置的构造函数，我们可以为他添加属性，giveLydiaPizza便是在原型链加的方法

// 因此所有的字符串(字符串对象)都可以访问该方法！
