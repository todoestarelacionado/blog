const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/blog/' : '/',
  transpileDependencies: true,
  devServer: {
    port: 8080,
  },
})