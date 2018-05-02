const path = require("path");

module.exports = {
  entry: { handlers: "./handlers.js" },
  mode: "production",
  node: {
    __filename: true,
    __dirname: true
  },
  target: "node",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
