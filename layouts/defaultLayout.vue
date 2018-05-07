<template>
  <div>
    <scroll-to/>
    <my-top/>
    <nuxt/>
    <my-bottom/>
  </div>
</template>

<script>
import scrollTo from '~/components/scrollTo.vue'
import myTop from '~/components/myTop.vue'
import myBottom from '~/components/myBottom.vue'

export default {
  components: {
    scrollTo,
    myTop,
    myBottom
  }
}
</script>