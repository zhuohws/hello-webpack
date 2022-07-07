var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.ts",
    mobile: "./src/mobile.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  // contentBase: "./dist",
  // stats: "errors-only",
  devServer: {
    compress: false,
    host: "localhost",
    port: 8090,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],
};
