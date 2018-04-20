<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title big">
          Shop
        </h1>
        <h2 class="subtitle is-size-3">
          Handcrafted items that are unique and environmentally conscious.
        </h2>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-8">
        <div v-html="script"></div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'shopHero',
    data: () => ({
    script: "<div id='my-search-13580081'></div><div><script data-cfasync='false' type='text/javascript' src='https://app.ecwid.com/script.js?13580081&data_platform=code&data_date=2018-04-19' charset='utf-8'><\/script><script type='text/javascript'> xSearch('id=my-search-13580081'); <\/script></div>",
  }),
}
</script>

<style scoped>
.hero {
 margin-top: 8vh;
}
.big {
  font-size: 4rem;
}
h1 {
  text-align: center;
	text-shadow: #ac3b61 2px 2px 1px,
               #d9d5d6 0 0 10px;
	background-image: -webkit-gradient linear-gradient(to right,#ff8a62,#ac3b61, #ff8a62);
	background-image: linear-gradient(to right,#ff8a62,#ac3b61, #ff8a62);
	background-repeat: no-repeat;
	background-size: 100% .2em;
	background-position: 0 95%;
}
h2 {
  text-align: center;
}
</style>