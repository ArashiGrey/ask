<template>
  <div class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <img class="logo" src="~assets/images/logo.png" alt="A cat peeking through a capital A.">
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
.hero {
  background-color: #413E3C;
}
.hero-body {
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
  color: #ac3b61;
  text-shadow: #171412 2px 2px 1px,
               #d9d5d6 0 0 5px;
}
.logo {
  width: 120px;
  display: inline-block;
}
</style>