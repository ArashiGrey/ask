<template>
  <div>
    <my-top/>
    <nuxt/>
    <my-bottom/>
  </div>
</template>

<script>
import myTop from '../components/myTop.vue'
import myBottom from '~/components/myBottom.vue'
import config from '~/plugins/civic.js'

export default {
  components: {
    myTop,
    myBottom
  },
  methods: {
    CookieControl:load( config )
  }
}
</script>