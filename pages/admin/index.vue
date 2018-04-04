<template>
  <section>
  <h1>Content Manager</h1>

  <script src="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.js"></script>
  </section>
</template>

<script>
export default {
  head: {
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://unpkg.com/netlify-cms@^1.0.0/dist/cms.css' }
    ]
  }
}
</script>

<style>
</style>
