const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
      hot: true,
      // need to think about how to set this in dev
      proxy: {
        "/api": "http://localhost:5000" 
      }
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
  };