const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  context: path.resolve(__dirname, 'src'),        //TODO: img src attributes are getting forwardslashes prepended for some reason. (Breaks imgs)
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, "../"),
    filename: "index.bundle.js",
    publicPath: "/"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".html", ".jpg"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html", filename: "index.html"})],
};
