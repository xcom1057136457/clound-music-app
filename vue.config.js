module.exports = {
  publicPath: process.env.NODE_ENV == 'development' ? './' : '/',
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/global.scss";`
      }
    }
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: `https://netease-cloud-music-api-gold-seven.vercel.app`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}