const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: ["web", "es5"],
  stats: { children: true },
  devServer: {
    port: "9500",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true,
    }),
    new CleanWebpackPlugin(),
  ],
};
