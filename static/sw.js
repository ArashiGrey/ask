importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "ask",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e9dedbb873ebcfacd91d.js",
    "revision": "0511d349d9310e1c14b6dc103cb7993f"
  },
  {
    "url": "/_nuxt/layouts/default.6a00aa79876d1f088f32.js",
    "revision": "a4bbb3a08d3533a0708bd2fcc361f607"
  },
  {
    "url": "/_nuxt/layouts/defaultLayout.cb1f118facb2284c64f4.js",
    "revision": "47dae053c19148a317f0b1761210713e"
  },
  {
    "url": "/_nuxt/manifest.f0f77904f15161b98195.js",
    "revision": "9c448c98f37a42a9c67853a7b0ddff6e"
  },
  {
    "url": "/_nuxt/pages/about.d17429a8df68d1dd4300.js",
    "revision": "cc592649537bdd0a9e14dabc4b444b8f"
  },
  {
    "url": "/_nuxt/pages/blog/_post.3dece0b03c1c8d0a11c0.js",
    "revision": "253cd3867452eaff9e6fd99fb74ff78b"
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
    "url": "/_nuxt/pages/info/_page.d0c3a100bd218b2f4b6e.js",
    "revision": "3a1d466d89216a1c5998292cc7a7e2c6"
  },
  {
    "url": "/_nuxt/pages/info/index.75f7f483de81210ed59e.js",
    "revision": "0085515b36ae3cbc332c221d662a04c3"
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
    "url": "/_nuxt/vendor.3da3a8d71c4ffc1ec7eb.js",
    "revision": "6b892ebbdb6bd61f1c1fe1499c6c556a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

