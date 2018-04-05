<template>
  <section class="pageStuff">
    <shop-hero/>
    <shop-Main/>
  </section>
</template>

<script>
import shopHero from '~/components/shop/shopHero.vue'
import shopMain from '~/components/shop/shopMain.vue'

export default {
  layout: 'others',
  components: {
    shopHero,
    shopMain
  },
  scrollToTop: true,
  head () {
    return {
      title: 'Amy Storm Kosman creative - Shop',
      meta: [
        { hid: 'description', name: 'description', content: 'A place to buy all things Amy Storm Kosman creative.' }
      ]
    }
  }
}
</script>

<style>
</style>