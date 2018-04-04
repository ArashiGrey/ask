<template>
  <section class="container">
    <div>
      <h2>
        Admin
      </h2>
    </div>
  </section>
</template>

<script>
import CMS from 'netlify-cms'

export default {
  head: {
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  }
}
</script>

<style>
</style>
