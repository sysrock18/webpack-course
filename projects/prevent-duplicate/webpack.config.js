const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'distc'),
    filename: '[name].js'
  },
  module: {
    rules: [
      //here is our loaders
      {
        test: /\.css$/, // tipo de archivo a reconocer
        // use: ['style-loader', 'css-loader'], // que loader se va a encargar del tipo de archivo, se deben instalar
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true, // para permitir importar archivos en css
                importLoaders: 1 // permitir que css-loader trabaje en conjunto con otro loader
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/, // tipo de archivo a reconocer
        // use: ['style-loader', 'css-loader'], // que loader se va a encargar del tipo de archivo, se deben instalar
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.styl$/, // tipo de archivo a reconocer
        // use: ['style-loader', 'css-loader'], // que loader se va a encargar del tipo de archivo, se deben instalar
        use: ExtractTextPlugin.extract({
          // use: ['css-loader', 'stylus-loader']
          use: [
            'css-loader',
            {
              loader: 'stylus-loader',
              options: {
                use: [
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl', // ~ alias para entrar a la carpeta de node_modules
                  '~rupture/rupture/index.styl',
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.less$/, // tipo de archivo a reconocer
        use: ExtractTextPlugin.extract({
          use: ['css-loader', {
            loader: 'less-loader',
            options: {
              noIeCompat: true, // no compatible con internet explorer viejos
            }
          }]
        })
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader', // convierte los archivos a base64
          options: {
            limit: 1000000 // hasta que limite de peso de archivo hara la transformacion en bytes
          }
        }
      },
      {
        test: /\.js$/, // tipo de archivo a reconocer
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    //here is our plugins
    new ExtractTextPlugin('css/[name].css') // entre llaves name es el comodin, el nombre del entry point
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'initial'
    }
  }
}