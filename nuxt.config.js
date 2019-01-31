
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'api',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    // Vuetify options
     theme: {
       primary: '#00bcd4',
       secondary: '#e91e63',
       accent: '#f44336',
       error: "#9c27b0",
       warning: "#ff9800",
       info: "#8bc34a",
       success: "#cddc39"
     }
  },

  axios: {
      proxy: true
  },

  proxy:{
    '/api':{
      target: "http://localhost:8080",
      changeOrigin: true
    }
  },
  plugins: [
    '~/plugins/axios'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

