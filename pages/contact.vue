<template>
  <section class="pageStuff">
    <contact-hero/>
    <contact-part/>
    <quick-message/>
    <signup-newsletter/>
  </section>
</template>

<script>
import contactHero from '~/components/contact/contactHero.vue'
import contactPart from '~/components/contact/contactPart.vue'
import quickMessage from '~/components/quickMessage.vue'
import signupNewsletter from '~/components/signupNewsletter.vue'

export default {
  layout: 'defaultLayout',
  components: {
    contactHero,
    contactPart,
    quickMessage,
    signupNewsletter
  },
  head () {
    return {
      title: 'A.S.K.c Contact',
      meta: [
        { hid: 'description', name: 'description', content: 'All the information needed to contact Amy and Amy Storm Kosman creative.' }
      ]
    }
  }
}
</script>
<style scoped>

</style>
