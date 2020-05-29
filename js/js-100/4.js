// a = ? 时 下面代码会打印出 1

// var a = {
//   i: 1,
//   toString() {
//     return a.i++
//   }
// }


// var a = {
//   num: 0
// }
// a.valueOf = function() {
//   console.log('valueof')
//   return ++a.num
// }

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
Object.defineProperty(window, 'a', {
  get() {
    this.value = 1
    return this.value += 1;
  }
})

if ( a == 1 && a == 2 && a == 3)
{
  console.log(1)
}