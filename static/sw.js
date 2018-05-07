importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "ask",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.01af8187d84d9052e4a3.js",
    "revision": "9941678a881ad6fc0a35c925b68bff81"
  },
  {
    "url": "/_nuxt/layouts/default.6872e38380d49fbbce7e.js",
    "revision": "7efc9e83d33724ed95239fa477ca9cfe"
  },
  {
    "url": "/_nuxt/layouts/defaultLayout.61b6a320feaa49035217.js",
    "revision": "ecb418170b59bfe15d8d8227c4234f4a"
  },
  {
    "url": "/_nuxt/manifest.514f4c4d7cda314149b3.js",
    "revision": "17a585358d8cba9af4a1a9003b70870c"
  },
  {
    "url": "/_nuxt/pages/about.80b5335b634cd0671868.js",
    "revision": "8b20a0e622749eb9e6a5af2f72674f0a"
  },
  {
    "url": "/_nuxt/pages/blog/_post.77bfbc9aa005741806b3.js",
    "revision": "2c53375cc3b6979c8a01853829dbeb90"
  },
  {
    "url": "/_nuxt/pages/blog/index.3f54648eaafd4c372c4b.js",
    "revision": "9d35fa575c936e9926ce8739c858050c"
  },
  {
    "url": "/_nuxt/pages/contact.d200b6d465ef46abda2a.js",
    "revision": "ad458837c81ca037bd37f3012e339ecb"
  },
  {
    "url": "/_nuxt/pages/gallery/index.0c5256bdc0ecea09f27f.js",
    "revision": "0c80b972d4f16d324c4ac05131eaa096"
  },
  {
    "url": "/_nuxt/pages/index.06c92a870df79f8d69b9.js",
    "revision": "68128e27482f67e5c0f9aad6ccd7bb80"
  },
  {
    "url": "/_nuxt/pages/info/_page.1d48796067f2e40a58d4.js",
    "revision": "13bd4d0bf07d25f15dc5d2fdbc878175"
  },
  {
    "url": "/_nuxt/pages/info/cookies/index.1cf150d38d741c932c7b.js",
    "revision": "e7a0d58cc2a9564e525c07c4fdaaa7da"
  },
  {
    "url": "/_nuxt/pages/info/index.eed639a39d00b402b2e6.js",
    "revision": "fbccf3f790b1f4c141e45bb0c9e911a0"
  },
  {
    "url": "/_nuxt/pages/shop/index.d9caa9530dd3bc441c2e.js",
    "revision": "4b2ee8a8f9bc3e7b1934105b9b634d98"
  },
  {
    "url": "/_nuxt/pages/successMessage.20a8fd4937a3bfa72c1a.js",
    "revision": "58ab4fa661f316e39d92c226eba4bbdf"
  },
  {
    "url": "/_nuxt/pages/successNews.a8bfc76f57a28398e323.js",
    "revision": "53e49e95db781cc35d4b5758f3e37b54"
  },
  {
    "url": "/_nuxt/vendor.c2a47b92daa6aa985b22.js",
    "revision": "fbec9a2e1208ec188b8af89651c5f039"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

