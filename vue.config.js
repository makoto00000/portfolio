const { defineConfig } = require('@vue/cli-service')

// require('dotenv').config()

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  // configureWebpack: {
  //   resolve: {
  //     fallback: {
  //       "fs": false,
  //       "path": false,
  //       "os": false,
  //       "stream": false,
  //       "crypto": false,
  //       "http": false,
  //       "https": false,
  //       "zlib": false,
  //       "net": false,
  //       "dns": false,
  //       "tls": false,
  //       "child_process": false,
  //     },
  //   },
  // },
  devServer: {
      allowedHosts: [
        'makoto-portfolio.com',
      ],
      port: 8080,
      // localhostでvueからexpressにAPIリクエストを送信する為の設定
      proxy: 'http://localhost:32768'
  },
})
