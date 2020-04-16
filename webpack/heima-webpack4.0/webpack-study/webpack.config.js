const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlplugin =  new HtmlWebpackPlugin({
  template:'./src/index.html',
  filename:'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  plugins:[htmlplugin, new VueLoaderPlugin()],
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename:'bundle.js'
  },
  module: { //这个节点用于配置所有第三方模块加载器
    rules:[ //所有第三方的匹配规则
        { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }, //配置处理 .css文件
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader' ] },
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader' ] },
        { test:/\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=17200&name=[hash:8]-[name].[ext]'},
        // { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, //处理字体文件的loader 
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // exclude排除node_modules文件下编译好的js文件，提高执行效率
        { test: /\.vue$/, use: 'vue-loader'}
    ]
},
}