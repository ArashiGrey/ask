<template>
  <section>
    <info-hero/>
    <info-pages/>
  </section>
</template>

<script>
import infoHero from '~/components/info/infoHero.vue'
import infoPages from '~/components/info/infoPages.vue'

export default {
  components: {
    infoHero,
    infoPages
  },
  layout: 'defaultLayout'
}
</script>
<style>

</style>