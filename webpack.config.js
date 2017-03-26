const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = { 
  entry: {
    javascript: './app/js/index.js',
    },  

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },  

  module: {
    rules: [
      {   
        test: /\.jsx?$/,
        exclude: /node_modules/,  
        loader:  ['react-hot-loader', 'babel-loader']
      },  
    ]   
  },  

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },  

  plugins: [HTMLWebpackPluginConfig]
};