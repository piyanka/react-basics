var path = require("path");

//var HtmlWebpackPlugin  = require('html-webpack-plugin');
//var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	//template: './src/index.html',
	//filename: 'index.html',
	//inject: 'body'
//})
 var DIST_DIR = path.resolve(__dirname,"dist");
 var SRC_DIR = path.resolve(__dirname, "src");


var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app"
  },
  module: {
    loaders: [
    { 
      test : /\.js?/,
      include: SRC_DIR,
      loader: "babel-loader",
      query: {
        presets: ["react", "es2015","stage-2"]
      }

    }
  ]
}
//module.exports = {
  //entry: './src/app/index.js',
  //output: {
    //path: path.resolve(__dirname,"dist"),
    //filename: 'index.js'
  //},
  //module: {
    //loaders: [
      //{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      //{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    //]
  //},
  //plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;