const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@css', resolve('src/assets/css'))
      .set('@cp', resolve('src/components'))
      .set('@v', resolve('src/views'))
  },
  devServer: {
    host: '0.0.0.0',
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://localhost:8088',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
}
