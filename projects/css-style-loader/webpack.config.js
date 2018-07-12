const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'distc'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      //here is our loaders
      {
        test: /\.css$/, // tipo de archivo a reconocer
        use: ['style-loader', 'css-loader'] // que loader se va a encargar del tipo de archivo, se deben instalar
      }
    ]
  }
}