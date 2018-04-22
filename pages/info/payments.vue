<template>
  <piecePaper>
    <section class="hero is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            Payment Policy
          </h1>
        </div>
      </div>
    </section>
      <div class="columns">
        <div class="column auto">
        </div>
        <div class="column is-three-fifths">
        <div v-html="page.body" />
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
      title: 'A.S.K.c Payment Policy',
      meta: [
        { hid: 'description', name: 'description', content: 'Amy Storm Kosman creative Payment Policy, how to pay, and how that payment is processed.' }
      ]
    }
  },
  components: {
    piecePaper
  },
    async asyncData({ app, route }) {
    return {
      page: await app.$content("/pages").get(route.path)
    }
  }
}
</script>
