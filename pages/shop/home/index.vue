<template>
  <section class="pageStuff">
    <home-hero/>
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
                Description:
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
  </section>
</template>

<script>
import homeHero from '~/components/shop/homeHero.vue'

export default {
  layout: 'defaultLayout',
  components: {
    homeHero
  },
  head () {
    return {
      title: 'A.S.K.c Home Decor',
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
.VueCarousel-slide {
  position: relative;
  text-align: center;
  min-height: 100px;
  margin: 5vh;
}
</style>


