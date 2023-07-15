const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: './src/app.js', // it wil took the code from here from the entry
  output: {
    path: path.resolve(__dirname, 'dist'),// and it will bundle the code in the output __dirname mean from the current directory go to dist folder and then bundle.js  
    filename: 'bundle.js', // it will create bundle.js file automaticly
  },
  module: {
    rules: [
      {
        test: /\.css$/, // like that we don't have to include any style sheet in our index.html file 
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // bc we don't want to look at any code in the node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    static :{
      directory: path.resolve(__dirname, 'dist')
    },
    port : 3000,
    open: true,
    hot:true, 
    compress: true, 
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: './src/index.html'  
    }),
    new MiniCssExtractPlugin()
  ],
};
