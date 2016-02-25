var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/Components/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mimimize: false,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['react-hot', 'ts'],
      include: path.join(__dirname, 'src')
    }]
  }
};
