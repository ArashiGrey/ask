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
    scripts: "<div><script type='text/javascript'> xProductBrowser('categoriesPerRow=3','views=grid(20,3) list(60) table(60)','categoryView=grid','searchView=list','id=my-store-13580081');<\/script></div>"
  }),
  head() {
    return {
      title: 'A.S.K.c Shop',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'A place to buy all things Amy Storm Kosman creative.'
      }],
      script: [
        { type:'text/javascript', async:'false', src:'https://app.ecwid.com/script.js?13580081', body: true, defer: true },
        { rel:"preload", href:"https://app.ecwid.com/script.js?13580081&data_platform=startersite_v2", body: false },
        { rel:"preload", href:"https://d29faf8vdpk3vt.cloudfront.net/static/26.5-16565-ge2d193e470b/js/store.bundle.js", body: false } 
      ]
    }
  }
}
</script>

<style>
</style>
