importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "ask",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.92535e1b2b5f273525dc.js",
    "revision": "db2536432264715c0af2ede16d1aa605"
  },
  {
    "url": "/_nuxt/layouts/default.6872e38380d49fbbce7e.js",
    "revision": "7efc9e83d33724ed95239fa477ca9cfe"
  },
  {
    "url": "/_nuxt/layouts/defaultLayout.7955a62c7e1f798d3ad2.js",
    "revision": "6418c27506aded8ad9dbd70a38a2fa7a"
  },
  {
    "url": "/_nuxt/manifest.e8c4e573dec37796b928.js",
    "revision": "1ad1a143c80c693567e7f0ffadd485ce"
  },
  {
    "url": "/_nuxt/pages/about.239fbacb9d50dcc10b20.js",
    "revision": "e7a144080cc5d7ce46e24665f4ca106b"
  },
  {
    "url": "/_nuxt/pages/blog/_post.b71eb3e6108db6a86275.js",
    "revision": "df1a7c6707d7ed7c42cd2091d2b3ea93"
  },
  {
    "url": "/_nuxt/pages/blog/index.3f54648eaafd4c372c4b.js",
    "revision": "9d35fa575c936e9926ce8739c858050c"
  },
  {
    "url": "/_nuxt/pages/contact.bc99cce8414f1a5eb805.js",
    "revision": "c78615d8a89e96d0e05067c62df19fb7"
  },
  {
    "url": "/_nuxt/pages/gallery/index.0c5256bdc0ecea09f27f.js",
    "revision": "0c80b972d4f16d324c4ac05131eaa096"
  },
  {
    "url": "/_nuxt/pages/index.df81ddead0a94e23940e.js",
    "revision": "a8af229caf2a81f94e63c8b538328e20"
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
    "url": "/_nuxt/pages/shop/index.633791d80dea2f23cbd5.js",
    "revision": "4934d7d3a8954c6c9ca09297e5580401"
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
    "url": "/_nuxt/vendor.2f88983cbca719e85406.js",
    "revision": "84da08cfbe646d5b90e6bf737735e945"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

