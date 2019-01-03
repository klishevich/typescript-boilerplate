const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.build/client'),
    publicPath: 'assets/'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/client/public',
        to: 'public'
      },
      {
        from: 'node_modules/react/umd',
        to: 'public'
      },
      {
        from: 'node_modules/react-dom/umd',
        to: 'public'
      }
    ], { debug: 'error' })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'source-map-loader'
      }
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
