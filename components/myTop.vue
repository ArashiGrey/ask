<template>
  <header>
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
      <a class="navbar-item" href="https://askcreative.space">
      <img src="https://res.cloudinary.com/askcreative-space/image/upload/c_scale,f_auto,w_28/v1516458784/logo1_uebvvs.png">
      <img src="https://res.cloudinary.com/askcreative-space/image/upload/c_scale,f_auto,w_28/v1516458778/logo2_xnne7r.png">
      <img src="https://res.cloudinary.com/askcreative-space/image/upload/c_scale,f_auto,w_28/v1516458790/logo_rsdvyu.png">
      <img src="https://res.cloudinary.com/askcreative-space/image/upload/c_scale,f_auto,w_28/v1516458764/logo3_d5xlr9.png">
      <img src="https://res.cloudinary.com/askcreative-space/image/upload/c_scale,f_auto,w_28/v1516458759/logo4_s2msgg.png">
    </a>
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
              <div class="navbar-item">
                <router-link to="/shop" class='link'>Shop</router-link>
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
  background: linear-gradient(to left, #413e3c, #413e3c 50%, #fefcfb 75%);
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
.navbar-brand {
  margin-left: 2rem;
}
.navbar-brand a:hover {
  background-color: #bab2b5;
}
@media (max-width: 768px){
  .navbar-brand{
  margin-left: 1rem;
}
}
</style>