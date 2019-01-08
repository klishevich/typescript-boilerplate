const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.build/client'),
    publicPath: 'assets/'
  },
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/client/public', to: 'public' },
      { from: 'node_modules/react/umd/react.development.js', to: 'public' },
      { from: 'node_modules/react-dom/umd/react-dom.development.js', to: 'public' }
    ], { debug: 'error' })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'awesome-typescript-loader' }
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  devServer: {
    port: 9090
  }
};
