<template>
  <section class="pageStuff">
    <shop-hero/>
    <div class="columns is-centered is-multiline">
      <div class="column">
      </div>
      <div class="column is-one-third-desktop">
        <div id="my-store-13580081"></div>
        <div id="productBrowser"></div>
        <script>
          window.ecwid_script_defer = true;

          var script = document.createElement('script');
          script.charset = 'utf-8';
          script.type = 'text/javascript';
          script.src = 'https://app.ecwid.com/script.js?13580081';

          document.getElementById('my-store-13580081').appendChild(script);

          window._xnext_initialization_scripts = [{
            widgetType: 'ProductBrowser',
            id: 'productBrowser',
            arg: [
              '"categoriesPerRow=3","views=grid(4,4) list(10) table(20)","categoryView=grid","searchView=list","style=","responsive=yes","id=productBrowser"'
            ]
          }];

        </script>
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
