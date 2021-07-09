const path = require('path');

module.exports = {
  //Точка входа 
  entry: './src/index.js',
  //Точка выхода
  output: {
    //Название файла 
    filename: 'bundle.js',
    //Папка
    path: path.resolve(__dirname,'./dist')
  },
  mode: 'production',
  module:{
    rules:[{
      test: /\.js$/,
      use:{
        loader: 'babel-loader',
        options:{
          presets:['@babel/env']
        }
      },
      exclude : /node_modules/
    }]
  }

};