const path = require('path')
// 在内存中 根据指定的模板页面 生成一份内存中的首页  同时自动把打包好的bundle注入到页面底部
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    
    // entry 是webpack指定的入口
    entry: path.join(__dirname,'./src/main.js'),//要打包的文件路径
    // output是输出出口
    output:{
        path: path.join(__dirname, './dist'),//打包指定的文件路径
        filename: 'bundle.js' //打包指定的文件名称
    },
    plugins:[  //所有webpack 插件的配置节点 
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件路径
            filename: 'index.html' // 设置生成的内存页面名称
        })
    ],
    module: { //这个节点用于配置所有第三方模块加载器
        rules:[ //所有第三方的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader' ] }, //配置处理 .css文件
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader' ] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader' ] },
            { test:/\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]'},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, //处理字体文件的loader 
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } // exclude排除node_modules文件下编译好的js文件，提高执行效率
        ]
    },
    mode: 'development' //模式设置
}