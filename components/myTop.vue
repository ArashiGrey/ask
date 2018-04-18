<template>
  <header>
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <div @click="menuIsActive = !menuIsActive" class="navbar-burger burger" data-target="navMenu" v-bind:class="{ 'is-active': menuIsActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu" v-bind:class="{ 'is-active': menuIsActive }">
        <div class="navbar-end">
          <div class="navbar-item">
            <p class="control">
              <div class="navbar-item">
                <router-link exact to="/" class='link'>Home</router-link>
              </div>
              <div class="navbar-item">
                <router-link to="/about" class='link'>About</router-link>
              </div>
              <div class="navbar-item">
                <router-link to="/blog" class='link'>Blog</router-link>
              </div>
              <div class="navbar-item">
                <router-link to="/gallery" class='link'>Gallery</router-link>
              </div>
              <div class="navbar-item has-dropdown is-hoverable">
                <a href='/shop' class='link'>Shop</a>
                <div class="navbar-dropdown is-boxed">
                  <div class="navbar-item">
                    <router-link to="/shop#!/Bags/c/28746114" class='link'>Bags</router-link>
                  </div>
                  <div class="navbar-item">
                    <router-link to="/shop#!/Belts/c/28746115" class='link'>Belts</router-link>
                  </div>
                  <div class="navbar-item">
                    <router-link to="/shop#!/Hair/c/28746116" class='link'>Hair</router-link>
                  </div>
                  <div class="navbar-item">
                    <router-link to="/shop#!/Home/c/28746117" class='link'>Home</router-link>
                  </div>
                  <div class="navbar-item">
                    <router-link to="/shop#!/Jewelry/c/28746118" class='link'>Jewelry</router-link>
                  </div>
                  <div class="navbar-item">
                    <router-link to="/shop#!/Scarfs/c/28746113" class='link'>Scarfs</router-link>
                  </div>
                </div>
              </div>
              <div class="navbar-item">
                <router-link to="/contact" class='link'>Contact</router-link>
              </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'myTop',
  data () {
    return {
      menuIsActive: false
    }
  }
}
</script>
<style scoped>
header,
.navbar {
  background-color: #413e3c;
}
.navbar-dropdown.is-boxed {
  background-color: #d9d5d6;
}
.navbar-dropdown.is-boxed a {
  color: #413e3c;
}
@media (max-width: 768px){
  .navbar-item a {
    color:#413e3c;
    padding: 1vh 2vw;
    }
  .navbar-item a.link {
    color:#413e3c;
  }
}
.navbar-item a{
  color:#bab2b5;
  padding: 1vh 2vw;
}
.navbar-item a:hover {
  color:#fefcfb;
  background-color: #ac3b61;
}
.nuxt-link-active {
  color: #fefcfb;
  font-weight: bold;
  text-decoration: underline;
}
.navbar-burger.burger {
  color:#bab2b5;
  background-color: #ac3b61;
}
</style>