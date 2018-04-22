var Prism = require('prismjs')
require('prismjs/components/prism-php')
require('prismjs/components/prism-yaml')
require('prismjs/components/prism-bash')

module.exports = {
  parsers: {
    md: {
      highlight: (code, lang) => {
        return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
      }
    }
},
  content:[
    [
      'posts',
      {
      permalink: ':year/:slug',
      page: '/blog/_post',
      generate: [ // for static build
        'get', 'getAll'
      ],
      isPost: true
      }
    ],
    [
      'infos',
      {
        page: '/info/_page',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ]
  ],
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'https://askcreative.space'
  }
}
