const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
var commonConfig =  {
  output: {
    path: path.resolve(__dirname + '/dist/'),
 
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
 
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = [
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'simple-vue-table.min.js',
    }
  }),
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/simple-vue-table.vue'),
    output: {
      filename: 'simple-vue-table.js',
      libraryTarget: 'umd',

      // These options are useful if the user wants to load the module with AMD
      library: 'simple-vue-table',
      umdNamedDefine: true
    }
  })
];