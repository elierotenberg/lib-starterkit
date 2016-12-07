import pkg from './package.json';

export default {
  output: {
    library: pkg.name,
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
};
