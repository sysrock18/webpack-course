const path = require("path")
const webpack = require("webpack")

module.exports = {
  mode: 'development',
  entry: {
    modules: ["react", "react-dom"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "[name]" // (se externaliza, exporta una variable global con este nombre)
    // referencia global para que lo pueda entender el segundo archivo que va a interpretar el codigo
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.resolve(__dirname, '[name]-manifest.json'),
    })
  ]
}