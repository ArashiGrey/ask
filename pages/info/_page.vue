<template>
  <piecePaper>
    <section class="hero is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            {{info.title}}
          </h1>
        </div>
      </div>
    </section>
      <div class="columns">
        <div class="column auto">
        </div>
        <div class="column is-three-fifths">
        <div v-html="info.body" />
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
      title: 'A.S.K.c ${this.info.title}',
      meta: [
        { hid: 'description', name: 'description', content: '${this.info.description}' }
      ]
    }
  },
  components: {
    piecePaper
  },
    async asyncData({ app, route }) {
    return {
      info: await app.$content("/info").get(route.path)
    }
  }
}
</script>
