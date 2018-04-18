<template>
  <section class="pageStuff">
    <shop-hero/>
    <div class="columns is-centered is-multiline">
      <div class="column">
        <div id="my-cart-13580081"></div>

      </div>
      <div class="column">

        <v-btn id='btn' @click='btnClick' @mouseover='showCard'>
        </v-btn>




        <div id="my-store-13580081"></div>
        <div>
          <script type="text/javascript" data-cfasync="false" src="https://app.ecwid.com/script.js?13580081" charset="utf-8"></script>
          <script type="text/javascript">
            xProductBrowser("categoriesPerRow=3", "views=grid(20,3) list(60) table(60)", "categoryView=grid",
              "searchView=list", "id=my-store-13580081");

          </script>
        </div>
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
    components: {
      shopHero
    },
    scrollToTop: true,
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
  #btn {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 999;
  }

  #card {
    background-color: #fefcfb;
    font-family: 'lato';
    border: 1px solid #bbb;
    border-radius: 0.4em;
    width: 16em;
    margin: auto 10px;
    position: fixed;
    right: 0;
    bottom: 6em;
    z-index: 999;
  }

  .card-title {
    border-bottom: 1px solid #bbb;
    height: 2.5em;
    background: linear-gradient(#fefcfb, #ccc);
  }

  .inside-card-title {
    font-size: 0.9em;
    font-weight: 700;
    color: #555;
  }

  .card-text {
    height: 4em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .inside-card-text {
    font-size: large;
    font-weight: 700;
    grid-row: 1;
  }

  .inside-card-hr {
    margin: 1em 0 0 0;
    grid-column: 1 / span 2;
    grid-row: 2;
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, #fefcfb, #ccc, #fefcfb);
  }

  .card-actions {
    width: 100%;
    padding: 1em;
  }

  .inside-card-actions {
    font-size: 1em;
    padding-top: 0.2em;
  }

  .inside-card-cheackout-btn {
    float: right;
    padding: 0.2em 0.7em;
    color: #fefcfb;
    background: linear-gradient(#f44336, #b71c1c);
    border-radius: 0.2em;
  }

</style>
