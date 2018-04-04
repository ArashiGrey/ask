<template>
  <div class='powder'>
    <my-hero/>
    <little-info/>
    <main-part/>
    <quick-message/>
    <signup-newsletter/>
    <my-bottom/>
      <script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
  </div>
</template>

<script>
import myHero from '~/components/home/myHero.vue'
import littleInfo from '~/components/home/littleInfo.vue'
import mainPart from '~/components/home/mainPart.vue'
import quickMessage from '~/components/quickMessage.vue'
import signupNewsletter from '~/components/signupNewsletter.vue'
import myBottom from '~/components/myBottom.vue'

export default {
  components: {
    myHero,
    littleInfo,
    mainPart,
    quickMessage,
    signupNewsletter,
    myBottom
  },
  head: {
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  } 
}
</script>

<style>
.powder {
  background-color: #fefcfb;
  color: #413e3c;
}
</style>