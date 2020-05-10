const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    promotion: './src/promotion/index.js',
    pay: './src/pay/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2 ,//最小引入次数
          minSize: 0  

        } 
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/promotion/index.html',
      filename: 'promotion.html',
      chunks: ['commons','promotion']  //当前html 引入的js文件有哪些

    }),
    new HtmlWebpackPlugin({
      template: './src/pay/index.html',
      filename: 'pay.html',
      chunks: ['commons','pay']
      
    })
  ]
}