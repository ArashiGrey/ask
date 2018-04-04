<template>
  <section class="container">
    <div>
      <h2>
        Admin
      </h2>
    </div>
    <div>
      <!-- Include the script that builds the page and powers Netlify CMS -->
  <script src="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.js"></script>
  </div>
  </section>
</template>

<script>
import CMS from 'netlify-cms'

export default {
  head: {
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    link: { rel: 'stylesheet', href: 'https://unpkg.com/netlify-cms@^1.0.0/dist/cms.css' }
  }
}
</script>

<style>
</style>
