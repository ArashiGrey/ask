importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "ask",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.ad4b2f7a8500d3a88afc.js",
    "revision": "c30a1213b444947fa74a66520a4ac1fd"
  },
  {
    "url": "/_nuxt/layouts/default.6872e38380d49fbbce7e.js",
    "revision": "7efc9e83d33724ed95239fa477ca9cfe"
  },
  {
    "url": "/_nuxt/layouts/defaultLayout.cb1f118facb2284c64f4.js",
    "revision": "47dae053c19148a317f0b1761210713e"
  },
  {
    "url": "/_nuxt/manifest.3ee06616ffddd2f14f86.js",
    "revision": "022e31fc088fa9324c461fe78d5a8fc0"
  },
  {
    "url": "/_nuxt/pages/about.d17429a8df68d1dd4300.js",
    "revision": "cc592649537bdd0a9e14dabc4b444b8f"
  },
  {
    "url": "/_nuxt/pages/admin/index.ddd2a50c9edd21d24dda.js",
    "revision": "144a84457cfa689ffb78092fdec18ee5"
  },
  {
    "url": "/_nuxt/pages/blog/_post.b6bf1264533622f84beb.js",
    "revision": "f9e483ea0c43c07125582d06d826b244"
  },
  {
    "url": "/_nuxt/pages/blog/index.0d39e1cabc29a6ba0c6e.js",
    "revision": "16243e15e148e43003ce7b26a1a16d94"
  },
  {
    "url": "/_nuxt/pages/contact.7b5056401423f7bd4167.js",
    "revision": "66083a64c1adaf98821ecfbc9fc2648e"
  },
  {
    "url": "/_nuxt/pages/gallery/index.f0b503f58d6180a0f8c4.js",
    "revision": "8b05a73073783a0e4ea3612f8fa6f9e7"
  },
  {
    "url": "/_nuxt/pages/index.4e23c6d77435d52a68e3.js",
    "revision": "a6753d7db46e06322dd41c7e3df5ce0d"
  },
  {
    "url": "/_nuxt/pages/info/_page.f09b653b3d1ce55a50c7.js",
    "revision": "dad185077dd6d80c732e8183e150ce32"
  },
  {
    "url": "/_nuxt/pages/info/index.14b9df344a1c18c2f54c.js",
    "revision": "8932a6c3b57014eee63d73f56b97963b"
  },
  {
    "url": "/_nuxt/pages/shop/index.3d741191526cf9d91367.js",
    "revision": "7ad2400e7968de6d541a7bec3932ea4e"
  },
  {
    "url": "/_nuxt/pages/successMessage.bcb8a2725a0d642d9a9a.js",
    "revision": "d3de05ad6446c498da4c51b38935472c"
  },
  {
    "url": "/_nuxt/pages/successNews.a609fafb318791b6cbb0.js",
    "revision": "486fd9d8df049d8e0a572b88404818f9"
  },
  {
    "url": "/_nuxt/vendor.d9a5c1b67cbedcd5b93b.js",
    "revision": "5472a364edea824ab991bf725d8d9207"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

