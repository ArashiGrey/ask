<template>
  <section class="pageStuff">
    <shop-hero/>
    <div class="columns is-centered is-multiline">
      <div class="column">
      </div>
      <div class="column">
        <div id='my-store-13580081'></div>  
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
    shopHero
    },
  data: () => ({
    scripts: "<div><script type='text/javascript' data-cfasync='false' src='https://app.ecwid.com/script.js?13580081' charset='utf-8'><\/script><script type='text/javascript'> xProductBrowser('categoriesPerRow=3','views=grid(20,3) list(60) table(60)','categoryView=grid','searchView=list','id=my-store-13580081');<\/script></div>"
  }),
  head() {
    return {
      title: 'A.S.K.c Shop',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'A place to buy all things Amy Storm Kosman creative.'
      }]
    }
  }
}
</script>

<style>
</style>
