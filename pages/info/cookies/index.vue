<template>
  <piecePaper>
    <section class="hero is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            Cookie Policy
          </h1>
        </div>
      </div>
    </section>
      <div class="columns">
        <div class="column auto">
        </div>
        <div class="column is-three-fifths content">
          <div v-html="scripts"></div>
        </div>
        <div class="column auto">
        </div>
      </div>
  </piecePaper>
</template>

<script>
import piecePaper from '~/components/info/piecePaper.vue'

export default {
  head () {
    return {
      title: `ASKc- Cookie Policy`,
      meta: [
        { hid: 'description', name: 'description', content: `Amy Storm Kosman creative Cookie Policy.` }
      ]
    }
  },
  components: {
    piecePaper
  },
    data: () => ({
    scripts: "<script id='CookieDeclaration' src='https://consent.cookiebot.com/7d4f74e8-03e4-4f85-81a7-8c691cd90849/cd.js' type='text/javascript' async><\/script>"
  })
}
</script>
<style>
.content {
  font-size: 1.25rem;
  line-height: 2rem;
}
.content a {
  color: #ac3b61;
  text-decoration: underline;
}
</style>
