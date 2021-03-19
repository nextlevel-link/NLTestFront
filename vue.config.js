const webpack = require('webpack')

module.exports = {
  lintOnSave: false,
  filenameHashing: false,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true
      }
    }

  }
}
