<template>
  <section class="pageStuff">
    <scarfs-hero/>
    <div class="columns is-centered is-multiline shoplist">
      <div class="column is-one-third">
        <div class="card">
          <header class="card-header">
            <h2 class="title"></h2>
          </header>
          <div class="card-content">
            <div class="content">
                <br>
              <p class="subtitle">
                <i>Description:</i>
                <br>
                <br>
              </p>
              <p>
                <i>Material(s):</i>
                <br>
              </p>
              <p>
                <i>Era:</i>
                <br>
              </p>
            </div>
            <footer class="card-footer">
              <p>Price (including 21% VAT):
                <br>€</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
    <div id="my-cart-13580081"></div>
<div>
<script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?13580081&data_platform=code&data_date=2018-04-17" charset="utf-8"></script>
<!-- remove layout parameter if you want to position minicart yourself -->
<script type="text/javascript"> xMinicart("layout=attachToCategories", "id=my-cart-13580081"); </script>
</div>
<div id="my-search-13580081"></div>
<div>
<script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?13580081&data_platform=code&data_date=2018-04-17" charset="utf-8"></script>
<script type="text/javascript"> xSearch("id=my-search-13580081"); </script>
</div>
    <div id="my-categories-13580081"></div>
<div>
<script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?13580081&data_platform=code&data_date=2018-04-17" charset="utf-8"></script>
<script type="text/javascript"> xCategoriesV2("id=my-categories-13580081"); </script>
</div>
        <div id="my-store-13580081"></div>
<div>
<script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?13580081&data_platform=code&data_date=2018-04-17" charset="utf-8"></script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-13580081");</script>
</div>
  </section>
</template>

<script>
import scarfsHero from '~/components/shop/scarfsHero.vue'

export default {
  layout: 'defaultLayout',
  components: {
    scarfsHero
  },
  data () {
    return {
      products: []
    }
  },
  head () {
    return {
      title: 'A.S.K.c Scarfs',
      meta: [
        { hid: 'description', name: 'description', content: 'Work in progress' }
      ]
    }
  }
}
</script>
<style scoped>
.hero {
 margin-top: 8vh;
}
h1 {
  color: #413e3c;
  background-image: linear-gradient(90deg, #ac3b61, #336ca4, #6c0729);
  background-size: 100% .5rem;
  background-position: 0 88%;
  background-repeat: no-repeat;
}
.shoplist {
  padding: 5vh;
}
.card {
  background-color: #fefcfb;
  -webkit-box-shadow: 0 4px 6px #bab2b5;
  box-shadow: 0 4px 6px #bab2b5;
  margin: 2px;
}
.card-header {
  padding: 2vh;
  -webkit-box-shadow: 0 0px 1px #bab2b5;
  box-shadow: 0 0px 1px #bab2b5
}
.card-footer {
  padding-top: 1vh;
  border-top: 1px solid #bab2b5;
}
</style>


