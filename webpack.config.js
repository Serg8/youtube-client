const path = require('path');

const conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  conf.devtool = production ? false : 'eval-sourcemap';
  return conf;
};
