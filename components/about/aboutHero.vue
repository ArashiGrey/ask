<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-1">
        About
        </h1>
        <h2 class="subtitle is-size-3">
        All about Amy and the business.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'aboutHero'
}
</script>

<style scoped>
.hero {
 margin-top: 8vh;
}
h1 {
	text-shadow: #BAB2B5 1px 3px;
	background-image: -webkit-gradient (linear-gradient(90deg, #ac3b61, #336ca4));
	background-image: linear-gradient(90deg, #ac3b61, #336ca4);
	background-repeat: no-repeat;
	background-size: 100% .2em;
	background-position: 0 95%;
}
</style>