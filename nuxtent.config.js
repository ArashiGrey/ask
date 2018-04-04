module.exports = {
  content:
    {
      permalink: ':year/:slug',
      page: '/blog/_post',
      generate: [ // for static build
        'get', 'getAll'
      ],
      isPost: true
    },
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000'
  }
}
