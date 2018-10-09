module.exports = {
  entry: './main',
  output: { path: __dirname, filename: 'bundle.js' },
  resolve: {
      extensions: ['', '.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
};
