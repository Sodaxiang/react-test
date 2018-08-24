const path = require("path");
const webpack = require("webpack");
const htmlPlugin = require("html-webpack-plugin");
const cleanPlugin = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "stage-0", "react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      filename: "index.html",
      template: "./src/temp.html"
    }),
    new cleanPlugin("dist"),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true
  }
};
