<template>
  <section class="pageStuff">
    <about-hero/>
    <company-story/>
    <personal-story/>
    <main-timeline/>
  </section>
</template>

<script>
import aboutHero from '~/components/about/aboutHero.vue'
import companyStory from '~/components/about/companyStory.vue'
import personalStory from '~/components/about/personalStory.vue'
import mainTimeline from '~/components/about/mainTimeline.vue'

export default {
  layout: 'defaultLayout',
  scrollToTop: true,
  components: {
    aboutHero,
    companyStory,
    personalStory,
    mainTimeline
  },
  head () {
    return {
      title: 'A.S.K.c About',
      meta: [
        { hid: 'description', name: 'description', content: 'Information about Amy, and Amy Storm Kosman creative. A little history a little story, and a few pictures.' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
