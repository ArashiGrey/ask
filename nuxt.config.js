module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ask',
    meta: [
      { charset: 'utf-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The official website of Amy Storm Kosman creative' },
      { name: 'application-name', content: '&nbsp;' },
      { name: 'msapplication-TileColor', content: '#fefcfb' },
      { name: 'msapplication-TileImage', content: 'mstile-144x144.png' },
      { name: 'msapplication-square70x70logo', content: 'mstile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: 'mstile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: 'mstile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: 'mstile-310x310.png'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: 'apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: 'apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: 'apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: 'apple-touch-icon-152x152.png' },
      { rel: 'icon', type: 'image/png', href: 'favicon-196x196.png', sizes: '196x196' },
      { rel: 'icon', type: 'image/png', href: 'favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: 'favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: 'favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: 'favicon-128.png', sizes: '128x128' },
      { rel: 'sitemap', href: '/sitemap.xml' }
    ]  
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
      '@nuxtjs/sitemap',
      'nuxt-bulma-slim',
      'nuxtent'
    ],
    sitemap: {
      hostname: 'https://askcreative.space',
      generate: true, // Enable me when using nuxt generate
      exclude: [
        '/admin',
        '/successMessage',
        '/successNews'
      ]
    },
    plugins: [
      // ssr: false to only include it on client-side
      { src: '~/plugins/vee-validate.js' }
    ],
    /*
     ** Customize the progress bar color
     */
    loading: {
      color: '#ac3b61',
      height: '5px'
    }
}
