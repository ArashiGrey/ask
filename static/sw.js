importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "ask",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f6745b2147d6dcd36b0b.js",
    "revision": "4a8f4b1a32154f08cbd1469c04948269"
  },
  {
    "url": "/_nuxt/layouts/default.dcd329cb2281c9761472.js",
    "revision": "ac9b8f753bc9e09ea10f27f91959cc21"
  },
  {
    "url": "/_nuxt/layouts/defaultLayout.cb1f118facb2284c64f4.js",
    "revision": "47dae053c19148a317f0b1761210713e"
  },
  {
    "url": "/_nuxt/manifest.2d7ee146c984552aec86.js",
    "revision": "7d91eddf57d12028998f229c1964fdc0"
  },
  {
    "url": "/_nuxt/pages/about.d17429a8df68d1dd4300.js",
    "revision": "cc592649537bdd0a9e14dabc4b444b8f"
  },
  {
    "url": "/_nuxt/pages/admin/index.f01ed3b96d053b54b5b9.js",
    "revision": "491e8ba2f57dca266d832425a80239a8"
  },
  {
    "url": "/_nuxt/pages/blog/_post.06da23e0818561742709.js",
    "revision": "5a4dd2eab4b23304baf77ae56ad9d244"
  },
  {
    "url": "/_nuxt/pages/blog/index.201f1d63ac6a41dcac6b.js",
    "revision": "e16575c2fed77a74cb352b3d6862a471"
  },
  {
    "url": "/_nuxt/pages/contact.7b5056401423f7bd4167.js",
    "revision": "66083a64c1adaf98821ecfbc9fc2648e"
  },
  {
    "url": "/_nuxt/pages/gallery/index.de1e6bb813918ac03cc4.js",
    "revision": "30be05e845202c3cd3fdc36d838aaefc"
  },
  {
    "url": "/_nuxt/pages/index.4c867bc59bae1886175e.js",
    "revision": "6fea2fbc1f81b0442ce2f6039328ab5e"
  },
  {
    "url": "/_nuxt/pages/info/faq.bc8d6bfbbc2ec4116d58.js",
    "revision": "f8d3d9a50c14021d155ce7eb96f91217"
  },
  {
    "url": "/_nuxt/pages/info/index.79600e11b34cc148e821.js",
    "revision": "b58705a165ec2323243220e9c123a0a5"
  },
  {
    "url": "/_nuxt/pages/info/payments.aa92105a8f821c1305be.js",
    "revision": "31ff2b7e34180138c439767e6d8f7684"
  },
  {
    "url": "/_nuxt/pages/info/privacy.704ec2f1cb48dea644b4.js",
    "revision": "68773bb6fd40a9630955140ea0577f48"
  },
  {
    "url": "/_nuxt/pages/info/returns.de03537167587dfb5670.js",
    "revision": "eb4141c77fec47711c89745b7ae189d2"
  },
  {
    "url": "/_nuxt/pages/info/shipping.181efef4915f00386c5f.js",
    "revision": "8b5ad8f97d6f207975eed0ee942ce764"
  },
  {
    "url": "/_nuxt/pages/info/terms.40e9ac94e559c84dc716.js",
    "revision": "033e2ea00841135b72334c8716f7496a"
  },
  {
    "url": "/_nuxt/pages/shop/index.3d741191526cf9d91367.js",
    "revision": "7ad2400e7968de6d541a7bec3932ea4e"
  },
  {
    "url": "/_nuxt/pages/successMessage.9f99e8b8f3849c037371.js",
    "revision": "a4aaf7d73ee8cc57aa93a2913da9d99f"
  },
  {
    "url": "/_nuxt/pages/successNews.fea0c5a8135137a0353e.js",
    "revision": "3bafff6ee94f3b58ce220304c59c16c8"
  },
  {
    "url": "/_nuxt/vendor.2847e25ffc964a4e93b0.js",
    "revision": "4fbbe8ca834c8566a7b32f8a31562c07"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

