<template>
  <section class="section page">
    <blog-hero/>
    <div class="columns is-centered is-multiline bloglist">
      <div class="column is-one-third">
          <ul>
    <li v-for='post in posts' :key='post'>
      <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
    </li>
</ul>
      </div>
    </div>
  </section>
</template>
<script>

import blogHero from '~/components/blog/blogHero.vue'

export default {
  layout: 'defaultLayout',
  components: {
    blogHero
  },
   async asyncData ({ app }) {
    return {
      posts: await app.$content('/').getAll()
    }
  },
  scrollToTop: true,
  head () {
    return {
      title: 'blog'
    }
  },
  transition (to, from) {
    if (!from || to.name === 'index') return 'slide-right'
    return 'slide-left'
  }
}
</script>
<style>
.bloglist {
  padding: 5vh;
}
</style>
