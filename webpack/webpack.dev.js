const path = require('path');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// INVESTIGAR
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

module.exports = {

  mode: 'development',
  entry: {
    index: './src/index.js',
    app: './src/app.js'
  },
  target: 'node',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    minimize: false
  },
  resolve:{
    extensions: ['js']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname,"./src"),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    //Progress bar
    new ProgressBarPlugin({
      format: `  :msg [:bar] ":percent"(:elapsed s)`,
    }),
  ],
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../.temp_cache'),
  },
  resolve: {
    symlinks: false,
  },
  // devServer: {
  //   contentBase:  path.resolve(__dirname, '../dist'),
  //   overlay: true
  // }
};