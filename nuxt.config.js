module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ask',
    meta: [{
      charset: 'utf-8'
      },
      {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
      },
      {
      hid: 'description',
      name: 'description',
      content: 'The official website of Amy Storm Kosman creative'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
      }]
    },
    /*
     ** Global CSS
     */
    css: [
      '~assets/css/style.css',
      '~/node_modules/bulma-timeline/dist/bulma-timeline.min.css'
    ],
    /*
     ** Build configuration
     */
    build: {
      extend(config, ctx) {
        if (ctx.isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      }
    },
    /*
     ** Modules
     */
    modules: [
      '@nuxtjs/pwa',
      'nuxt-bulma-slim',
      'nuxtent'
    ],
    plugins: [
      // ssr: false to only include it on client-side
      { src: '~/plugins/vee-validate.js' }
    ],
    /*
     ** Customize the progress bar color
     */
    loading: {
      color: '#ac3b61'
    }
}
