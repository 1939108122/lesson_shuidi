const path = require('path')
// const htmlWebpackPlugin = require('htmlWebpackPlugin')
module.exports = {
    
    // entry 是webpack指定的入口
    entry: path.join(__dirname,'./src/main.js'),//要打包的文件路径
    // output是输出出口
    output:{
        path: path.join(__dirname, './dist'),//打包指定的文件路径
        filename: 'bundle.js' //打包指定的文件名称
    },
    devServer: {
        open: true, //自动打开浏览器
        port:3000, //设置启动时的端口
        contentBase: 'src', // 指定托管的根目录
        hot: true    // 设置热更新

    },
    module: { //这个节点用于配置所有第三方模块加载器
        rules:[ //所有第三方的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader' ] } //配置处理 .css文件
        ]

    },
    mode: 'development'
}
//1 首先 webpack 发现， 我们并没有通过命令的形式 给他指定入口和出口
// 2 webpack就会去 项目中的根目录中 查找一个叫做 ‘webpack.config.js' 的配置文件
//3 当找到配置文件后，webpack会去解析执行这个配置文件 当解析执行配置完文件后 就得到了配置文件中 导出的配置对象
// 4 当webpack 拿到配置对象后 就拿到了配置对象中， 指定的入口 和出口 然后进行打包构建 


// 使用webpack-dev-server这个工具 来实现自动打包编译的功能 
// webpack-dev-server 帮我们    打包生成的 bundle.js 文件 并没有存放到实际的物理磁盘上， 而是直接托管到了电脑的内存中 所以我们在根目录找不到