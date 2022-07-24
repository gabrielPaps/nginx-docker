const path = require('path');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// INVESTIGAR
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();



module.exports = {
  entry: {
    index: path.resolve(__dirname,'../src/index.js'),
    app: path.resolve(__dirname,'../src/app.js')
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
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
        exclude: /(node_modules)/,
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
};