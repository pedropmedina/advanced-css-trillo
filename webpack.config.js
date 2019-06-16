const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HTMLPlugin = require('html-webpack-plugin');
const MiniCSSPlugin = require('mini-css-extract-plugin');

const loadEnv = env => require(`./build-utils/webpack.${env.mode}.js`)(env);

module.exports = (env = { mode: 'production', presets: [] }) => {
  const devMode = env.mode === 'development';

  return merge(
    {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
      },
      mode: env.mode,
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: { loader: 'babel-loader' },
            include: path.resolve(__dirname, 'src')
          },
          {
            test: /\.html$/,
            use: { loader: 'html-loader' }
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCSSPlugin.loader,
                options: {
                  hmr: env.mode === 'development'
                }
              },
              'css-loader'
            ]
          },
          {
            test: /\.(jpg|png|svg|gif)$/,
            use: { loader: 'file-loader' }
          }
        ]
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new MiniCSSPlugin({
          filename: devMode ? '[name].css' : '[name].[hash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        new HTMLPlugin({
          template: './public/index.html',
          favicon: './src/img/favicon.png'
        }),
        new CleanPlugin()
      ]
    },
    loadEnv(env)
  );
};
