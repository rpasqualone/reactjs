'use strict';

var path = path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './app.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!'
      },
      { test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
        include: [path.resolve(__dirname, 'app/styles')]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
  devServer: {
    port: 4040
  },
  resolve: {
    root: path.resolve(__dirname, './app')
  }
}
