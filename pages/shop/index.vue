<template>
  <section class="pageStuff">
    <shop-hero/>
    <div class="columns is-centered is-multiline">
      <div class="column">
      </div>
      <div class="column is-one-third-desktop">
        <div id="my-store-13580081"></div>
        <div id="productBrowser"></div>
         <div v-html="scripts"></div>
      </div>
      <div class="column">
      </div>
    </div>
  </section>
</template>



<script>
import shopHero from '~/components/shop/shopHero.vue'

export default {
  layout: 'defaultLayout',
  scrollToTop: true,
  components: {
    shopHero,
    },
  data: () => ({
    scripts: "<script type='text/javascript' data-cfasync='true' src='https://app.ecwid.com/script.js?13580081' charset='utf-8'><\/script><script type='text/javascript'> xProductBrowser('categoriesPerRow=3','views=grid(20,3) list(60) table(60)','categoryView=grid','searchView=list','id=my-store-13580081');<\/script>"
  }),
  head() {
    return {
      title: 'A.S.K.c Shop',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'A place to buy all things Amy Storm Kosman creative.'
      }],
      link: [
        { rel:'dns-prefetch', href:'//images-cdn.ecwid.com/' },
        { rel:'dns-prefetch', href:'//images.ecwid.com/' },
        { rel:'dns-prefetch', href:'//app.ecwid.com/' }
      ]
    }
  }
}
</script>

<style>
</style>
