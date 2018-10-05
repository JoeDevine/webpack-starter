const HtmlWebPackPlugin = require("html-webpack-plugin");
const { cdnUrl: skyToolkitCdnUrl } = require('sky-toolkit');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  skyToolKitUrl: skyToolkitCdnUrl
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlPlugin],
  externals: {
    'sky-toolkit': 'sky-toolkit'
  }
};