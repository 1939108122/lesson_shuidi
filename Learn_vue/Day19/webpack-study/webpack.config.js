const path = require('path')
module.exports = {
    
    // entry 是webpack指定的入口
    entry: path.join(__dirname,'./src/main.js'),//要打包的文件路径
    // output是输出出口
    output:{
        path: path.join(__dirname, './dist'),//打包指定的文件路径
        filename: 'bundle.js' //打包指定的文件名称
    },
    mode: 'development'
}