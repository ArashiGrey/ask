<template>
  <div class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <img class="logo" src="https://res.cloudinary.com/askcreative-space/image/upload/c_scale,f_auto,w_120/v1516458790/logo_rsdvyu.png" alt="A cat peeking through a capital A.">
      <h1 class="title big-size">
        Amy Storm Kosman
      </h1>
      <h2 class="subtitle small-size">
        creative
      </h2>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'myHero'
}
</script>
<style scoped>
.hero.is-fullheight {
  background-color: #336ca4;
}
.heroimage {
  max-height: 100vh;
}
.hero-body {
  background-image: url('https://res.cloudinary.com/askcreative-space/image/upload/f_auto,q_80/v1523607303/Optimized-heroApril132017.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 85vw;
  padding: 0;
}
.big-size {
  font-size: 4rem;
}
.small-size {
  font-size: 3rem;
}
h1 {
  background-image: linear-gradient(90deg,#0d4276,#6c0729);
  background-size: 100% .7rem;
  background-position: 0 90%;
  background-repeat: no-repeat;
}
.title,
.subtitle {
  margin-left: 12vw;
  color: #ac3b61;
  text-shadow: #171412 2px 2px 1px,
               #d9d5d6 0 0 5px;
}
.logo { 
  margin-left: 12vw;
  width: 120px;
  display: inline-block;
}

</style>