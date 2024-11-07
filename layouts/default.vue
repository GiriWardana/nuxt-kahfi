<template>
    <div>
      <Header />
      <!-- Next to render Active Page -->
        <Nuxt />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    name: 'HeaderFooter',
    components: {
      Header,
      Footer
    }
  }
  </script>
  