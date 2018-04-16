importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "ask",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c7a5bd8b4e6b1863cc51.js",
    "revision": "97520933500a8f17c1714610f16a815b"
  },
  {
    "url": "/_nuxt/layouts/default.c788d458b69c568abb65.js",
    "revision": "de06dd326a9206bf1ecf15ac3ffe691d"
  },
  {
    "url": "/_nuxt/layouts/defaultLayout.510063639c5d80a32fea.js",
    "revision": "3bbb9567e5be889839da8c366b035d49"
  },
  {
    "url": "/_nuxt/manifest.4ba5e8177339f3a3b8af.js",
    "revision": "5ea40191713bce7a62584111137f64ee"
  },
  {
    "url": "/_nuxt/pages/about.9a484187d070063ea5f7.js",
    "revision": "e7e240b6897de2c09386c5d3880fcac3"
  },
  {
    "url": "/_nuxt/pages/admin/index.cf0dff2e168a7d5e103b.js",
    "revision": "831e668f8e0508df58f111eb1867b5ff"
  },
  {
    "url": "/_nuxt/pages/blog/_post.0b417f5c210c19277286.js",
    "revision": "9da6b3164ed33a5d198cfc5ed3814457"
  },
  {
    "url": "/_nuxt/pages/blog/index.a657c011b853afa8e473.js",
    "revision": "de79384b9f8df22a7cc978393265c38a"
  },
  {
    "url": "/_nuxt/pages/contact.48af2cb3869d75b7d2a7.js",
    "revision": "ed3ef22134958a1d75a68b1e2f17706f"
  },
  {
    "url": "/_nuxt/pages/gallery/index.7dd5cff409a7b8dcb463.js",
    "revision": "ba5459a4e5336c31ed54e0a4a6fd41da"
  },
  {
    "url": "/_nuxt/pages/index.1e827d7d334bad443362.js",
    "revision": "7d0655e6e516340a2369fa114f8efc6a"
  },
  {
    "url": "/_nuxt/pages/info/faq.2a16dd60fd9594005094.js",
    "revision": "2720d46c4bea86916b0246def47bb38e"
  },
  {
    "url": "/_nuxt/pages/info/index.046380d0358bb6cfdf8e.js",
    "revision": "1bbf13b77d17a40987720cf2c7256c55"
  },
  {
    "url": "/_nuxt/pages/info/payments.2f298606b94787b5e5a7.js",
    "revision": "6117948c4081239205b3f476312ae5c6"
  },
  {
    "url": "/_nuxt/pages/info/privacy.916739a29f8374be312a.js",
    "revision": "a4d3b8537675924d19672edf5246ca4e"
  },
  {
    "url": "/_nuxt/pages/info/returns.a40639bcaf1a8a9d632a.js",
    "revision": "90d480918da3e5c7007ae590408a87dc"
  },
  {
    "url": "/_nuxt/pages/info/shipping.0c2ad09c3ef1398c2c8f.js",
    "revision": "729cdb22e8494747a267469db2b6b46d"
  },
  {
    "url": "/_nuxt/pages/info/terms.8b934e8652dda86a5722.js",
    "revision": "0c0bab550b5a77a0583ef4e411ab2488"
  },
  {
    "url": "/_nuxt/pages/shop/bags/index.c88d46dae70f082daa3d.js",
    "revision": "50cca74a60f7f27d3c25617f71693a8e"
  },
  {
    "url": "/_nuxt/pages/shop/belts/index.24f4678d4812f0f2c9b8.js",
    "revision": "b017e32e889baa190fc2dd686418753f"
  },
  {
    "url": "/_nuxt/pages/shop/hair/index.6ca887281a23c34f8d9c.js",
    "revision": "bba2ff7bc00061927680ee3968f1dce1"
  },
  {
    "url": "/_nuxt/pages/shop/home/index.3b44bae7d7a0854c94ef.js",
    "revision": "b7d09e668b5bb89630fbdcca2a102070"
  },
  {
    "url": "/_nuxt/pages/shop/index.08df54c62086a035a349.js",
    "revision": "34c869d2a566fca6d2aa8fc933494b3f"
  },
  {
    "url": "/_nuxt/pages/shop/jewelry/index.bd960e387b28252502ec.js",
    "revision": "c3b774c1bf7617c991a8cbc89d53d944"
  },
  {
    "url": "/_nuxt/pages/shop/scarfs/index.cee557209dc4781b34db.js",
    "revision": "5951d69fc3f28118d71407cd3ce4b887"
  },
  {
    "url": "/_nuxt/pages/successMessage.937c032bce1ab023ef0d.js",
    "revision": "79822409a6bdb8b9ed58cd54888d2611"
  },
  {
    "url": "/_nuxt/pages/successNews.050411b41d4afb8bbe1b.js",
    "revision": "e11fd38c462617ec7fcf6bae38f55879"
  },
  {
    "url": "/_nuxt/vendor.fb88ed72da27e4fd0dc8.js",
    "revision": "36dc6d161902957f55304f569a9b423f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

