// a = ? 时 下面代码会打印出 1

var a = {
  i: 1,
  toString() {
    return a.i++
  }
}


// var a = {
//   num: 0
// }
// a.valueOf = function() {
//   return ++a.num
// }

// 以上两个方法解析：
// ==双等号在工作时会涉及到类型转换问题，如果等号两边的数值类型不一样可以尝试将他们转化成一个类型。
// 对象类型在使用双等号时,会涉及到隐式转换。
// valueOf()和toString()这两个方法是每个对象都有的(继承自Object原型)。
// toString()方法返回字符串，valueOf()方法返回对象本身 在隐式转换中会调用到对象的toString方法。

// 执行a==1时，js引擎会尝试把对象类型a转化为数字类型，首先调用a的valueOf方法来判断，不行则继续调用toString方法，
// 然后再把toString返回的字符串转化为数字类型再去和a作比较(这里我重写了toString就直接返回的数字类型的结果，
// 正常情况toString返回的字符串)。
// 
// 所以每使用一次==判断都会调用一次a的toString方法，返回i属性的值，然后使a的i属性加1，所以最后判定为true。
// 转换时优先调用valueOf()方法
// 




// let a= {
//   gn: (function* () {
//     yield 1;
//     yield 2;
//     yield 3;

//   })(),
//   valueOf() {
//     return this.gn.next().value;
//   }
// }


// Object.defineProperty(window, 'a', {
//   get() {
//     this.value = 1
//     return this.value += 1;
//   }
// })

if ( a == 1 && a == 2 && a == 3)
{
  console.log(1)
}

