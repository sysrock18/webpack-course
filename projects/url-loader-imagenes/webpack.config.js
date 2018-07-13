const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
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
        // use: ['style-loader', 'css-loader'], // que loader se va a encargar del tipo de archivo, se deben instalar
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // es un plan b si falla algo
          use: 'css-loader'
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader', // convierte los archivos a base64
          options: {
            limit: 100000 // hasta que limite de peso de archivo hara la transformacion en bytes
          }
        }
      },
      {
        test: /\.js$/, // tipo de archivo a reconocer
        // use: ['style-loader', 'css-loader'], // que loader se va a encargar del tipo de archivo, se deben instalar
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    //here is our plugins
    new ExtractTextPlugin('css/[name].css') // entre llaves name es el comodin, el nombre del entry point
  ]
}