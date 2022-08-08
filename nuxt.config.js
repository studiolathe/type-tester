import pkg from './package'

export default {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Type Tester',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@assets/scss/main.scss'
  ],

  styleResources: {
    scss: [
      '@assets/scss/base/_02-variables.scss',
      '@assets/scss/base/_03-mixins.scss',
      '@assets/scss/base/_04-helpers.scss'
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
