<template>
  <one-article>
    <section class="section page">
      <div class="content">
        <div>
          <h1 class="title">{{ post.title }}</h1>
        </div>
        <div class="card">
          <div class="card-content">
            <div v-html="post.body" />
          </div>
        </div>
      </div>
      <div class="just-comments" data-allowguests="true" data-recaptcha="true" data-apikey="a0ed5c59-7970-4b05-aa80-3c6eb7ed198f">
      </div>
      <script async src="https://just-comments.com/w.js"></script>
      <script src='https://www.google.com/recaptcha/api.js?onload=jcOnRecaptchaLoad&render=explicit' async defer>
      </script>

    </section>
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
