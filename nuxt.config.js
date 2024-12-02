export default {
  //BELOW IS FOR SSG
  // target: 'static',
  // generate: {
  //   routes: ['/contact',],
  //   fallback: true,
  // },
  // router: {
  //   mode: 'history',
  //   trainingSlash: true
  // },
  //ABOVE IS FOR SSG
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KAHFI - Kelompok Belajar Ikhtiar dan Fikir Islami',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'KAHFI (Kelompok Belajar Ikhtiar dan Fikir Islami) adalah lembaga motivator pertama yang ada di dunia yang semua Mahasiswa didiknya tidak dikenakan biaya dari segi materi.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'KAHFI, motivator, islami, pendidikan gratis, fikir islami',
      },
      { charset: 'UTF-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Favicon
      { rel: 'icon', type: 'image/x-icon', href: '/assets/img/logo/favicon.png' },

      // External CSS
      { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/assets/css/all-fontawesome.min.css' },
      { rel: 'stylesheet', href: '/assets/css/animate.min.css' },
      { rel: 'stylesheet', href: '/assets/css/magnific-popup.min.css' },
      { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/assets/css/style.css' }
    ],
    script: [
      { src: '/assets/js/jquery-3.7.1.min.js', defer: true },
      { src: '/assets/js/modernizr.min.js', defer: true },
      { src: '/assets/js/bootstrap.bundle.min.js', defer: true },
      { src: '/assets/js/imagesloaded.pkgd.min.js', defer: true },
      { src: '/assets/js/jquery.magnific-popup.min.js', defer: true },
      { src: '/assets/js/isotope.pkgd.min.js', defer: true },
      { src: '/assets/js/jquery.appear.min.js', defer: true },
      { src: '/assets/js/jquery.easing.min.js', defer: true },
      { src: '/assets/js/owl.carousel.min.js', defer: true },
      { src: '/assets/js/counter-up.js', defer: true },
      { src: '/assets/js/wow.min.js', defer: true },
      { src: '/assets/js/main.js', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // vue: {
  //   config: {
  //     layout: 'HeaderFooter' // Specify global layout for all pages
  //   }
  // }
  // layout: 'HeaderFooter',
}
