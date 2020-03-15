const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
        }),
        new VueLoaderPlugin()

    ],
    module: { //这个节点用于配置所有第三方模块加载器
        rules:[ //所有第三方的匹配规则
            
            { test: /\.css$/, use: ['style-loader', 'css-loader' ] }, //配置处理 .css文件
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader' ] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader' ] },
            { test:/\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader'},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test:/\.vue$/, use:'vue-loader' },
            
        ]

    },
    devServer: {
        open: true, //自动打开浏览器
        port:3000, //设置启动时的端口
        contentBase: 'src', // 指定托管的根目录
        hot: true    // 设置热更新

    },
    resolve: {
        alias:{
            // "vue$": "vue/dist/vue.js"
        }
    },
    mode: 'development' //模式设置
}