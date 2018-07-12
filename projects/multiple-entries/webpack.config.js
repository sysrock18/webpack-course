const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    prices: path.resolve(__dirname, 'src/js/prices.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'distc'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      //here is our loaders
      {
        test: /\.css$/, // tipo de archivo a reconocer
        // use: ['style-loader', 'css-loader'], // que loader se va a encargar del tipo de archivo, se deben instalar
        use: ExtractTextPlugin.extract({
          // fallback: 'style-loader', es un plan b si falla algo
          use: 'css-loader' 
        })
      }
    ]
  },
  plugins: [
    //here is our plugins
    new ExtractTextPlugin('css/[name].css') // entre llaves name es el comodin, el nombre del entry point
  ]
}