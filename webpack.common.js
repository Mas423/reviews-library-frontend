const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
dotenv.config().parsed;

module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: 'tsconfig.json',
          },
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      // },
    ],
  },
  target: ['web', 'es5'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        tsconfig: path.resolve(__dirname, '/tsconfig.json'),
      },
      eslint: {
        files: './src/**/*.{ts,tsx}',
      },
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx'],
      exclude: ['node_module', 'dist'],
    }),
    new webpack.EnvironmentPlugin([
      'FB_API_KEY',
      'FB_AUTH_DOMAIN',
      'PROJECT_ID',
      'STORAGE_BUCKET',
      'MESSAGING_SENDERID',
      'APP_ID',
      'MEASUREMENT_ID',
    ]),
  ],
};
