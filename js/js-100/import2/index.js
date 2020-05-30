console.log('running index.js')
import { sum } from './sum.js'

console.log(sum(1, 2))
// running sum.js  running index.js  3


// import 命令是编译阶段执行的，在代码运行之前，因此这意味着被导入的模块会先运行，
// 而导入模块的文件会后执行。

//这是CommonJS中 require() 和 import之间的区别， 使用require() 而不是 import，
//  则输出结果是： running index.js running sum.js 3