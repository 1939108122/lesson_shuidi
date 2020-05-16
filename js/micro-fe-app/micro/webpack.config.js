const path = require('path');
const WebpackSystemRegister = require('webpack-system-register')
module.exports = {
  entry: {
    Pay: path.join(__dirname, './Pay.jsx')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new WebpackSystemRegister({})

  ]
};