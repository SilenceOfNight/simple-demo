const utils = require('./utils')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: utils.resolve('./dist')
  }
})

module.exports = config
