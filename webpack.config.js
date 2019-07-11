let path = require("path");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'index.min.js',
    library: "__Computed",
  },
  resolve: {
    extensions: ['.js']
  },
  module: {},
  externals: [],
  plugins: []
}