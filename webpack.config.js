var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var ip="localhost";
module.exports = {
  context: __dirname,

  entry: {
    Index: ['webpack-dev-server/client?http://' + ip + ':3000',
                 'webpack/hot/only-dev-server',
                './reactApp/src/index.js'
                ],
     vendors: ['react'],
  },
  output: {
      path: path.resolve('./reactApp/bundles/'),
      filename: "[name]-[hash].js",
      publicPath: 'http://localhost:3000/assets/bundles/',
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
