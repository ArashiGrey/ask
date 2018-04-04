<template>
  <one-article>

<div>
    <h1>{{ post.title }}</h1>
		<div v-html="post.body" />
</div>


  </one-article>
</template>

<script>
import oneArticle from '~/components/blog/oneArticle.vue'

export default {
    components: {
    oneArticle
  },
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/').get(route.path)
    }
  },
  transition (to, from) {
    if (!from || to.path === '/blog') return 'slide-left'
    return 'slide-right'
  }
}
</script>
<style>
.page {
  margin: 5vh;
  padding: 10vh 15vh;
}
.content a {
  color: #ac3b61;
  text-decoration: underline;
}
.just-comments {
  margin-top: 5vh;
}
</style>
