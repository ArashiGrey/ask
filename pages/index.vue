<template>
  <div class='powder'>
    <my-hero/>
    <little-info/>
    <main-part/>
    <brief-about/>
    <brief-blog/>
    <brief-shop/>
    <quick-message/>
    <signup-newsletter/>
    <my-bottom/>
    <div v-html="scripts"></div>
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
import briefAbout from '~/components/home/briefAbout.vue'
import briefBlog from '~/components/home/briefBlog.vue'
import briefShop from '~/components/home/briefShop.vue'
import quickMessage from '~/components/quickMessage.vue'
import signupNewsletter from '~/components/signupNewsletter.vue'
import myBottom from '~/components/myBottom.vue'

export default {
  scrollToTop: true,
  components: {
    myHero,
    littleInfo,
    mainPart,
    briefAbout,
    briefBlog,
    briefShop,
    quickMessage,
    signupNewsletter,
    myBottom
  },
    data: () => ({
    scripts: "<script src='https://identity.netlify.com/v1/netlify-identity-widget.js' ><\/script>"
  })
}
</script>

<style>
.powder {
  background-color: #fefcfb;
  color: #413e3c;
}
</style>