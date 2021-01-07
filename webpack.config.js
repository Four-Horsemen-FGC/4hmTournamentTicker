const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    open: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },




  // mode: 'development',
  // entry: './src/app.js',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.join(__dirname, '../dist')
  // },

  // module: {
  //   rules: [{
  //     loader: 'babel-loader',
  //     test: /\.js$/,
  //     exclude: /node_modules/
  //   }]
  // },

  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   hot: true,
  //   open: true,
  //   compress: true,
  //   port: 8001,
  // }


};