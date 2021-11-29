const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const Dotenv = require('dotenv-webpack');


module.exports = {
  mode: "development", 
  entry: "./src/index.tsx", 
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "dist"), 
    filename: "diy-client-web-application-[hash].js", 
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader"
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ],
  },
  resolve: {
    modules: ["node_modules",path.resolve(__dirname, "app")],
    extensions: [".js", ".ts", ".json", ".tsx", ".css"],
    alias: {
      '@src': '/src',
    },
  },
  devtool: "inline-source-map", 
  devServer: {
    historyApiFallback: true,
    https: true, // true for self-signed, object for cert authority
    port: 8080,
    host: "127.0.0.1"
  },
  plugins: 
    [
        new NodePolyfillPlugin(),
        new HtmlWebpackPlugin({}),
        new Dotenv()
    ]
}
