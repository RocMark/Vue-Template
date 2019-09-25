const path = require('path')

function resolve(dir) { return path.join(__dirname, dir) }
module.exports = {
  // 可以設定 build 後的路徑
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_normalize.scss";
          @import "@/scss/_base.scss";
          @import "@/scss/_extend.scss";
        `,
      },
    },
  },
}
