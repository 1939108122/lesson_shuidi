var html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>'
function parse() {

}
// 虚拟DOM 不是概念， 而是在大脑的内存里， 
// 下一个阶段  n
// Abstract Syntax Tree
const ast = parse(); // ast  vue/react template  -> 抽象语法树(vue, bable) ->   虚拟DOM

console.log(ast);