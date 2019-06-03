const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/ }],
  },
};
