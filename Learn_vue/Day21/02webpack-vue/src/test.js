// 这是 node 中向外暴露成员的形式:
// module.exports= { }
// ES6中导入模块 使用import模块名称 from '模块标志符' import '表示路径'
// es6中 用export default 和 export向外暴露成员


// node中用 var 名称 = require('模块标志符') 导入
//   module.exports= { } 导出暴露成员
export default{
    name: 'zs', age:18
}
// 注意: 在一个模块中  export default只允许使用一次
export var title = '小星星'
// 使用export向外暴露成员时 只能使用 {} 来接受 这种形式叫 【按需导出】
export var hhh = '哈哈哈'
// export 可以向外暴露多个成员 