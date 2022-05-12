module.exports = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'X-About-Custom-Header',
            value: 'about_header_value',
          },
        ],
      },
      {
        source: '/news/:id',
        headers: [
          {
            key: 'X-News-Custom-Header',
            value: 'news_header_value',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
  {
      "source": "/abc",
      "has": [
        {
          "type": "header",
          "key": "x-forwarded-for",
          "value": "146.70.117.57"
        }
      ],
      "destination": "https://google.com",
      "permanent": false
    },
    {
      "source": "/xyz",
      "has": [
          {
            type: 'header',
            key: 'User-Agent',
            value:
              '(.*Mozilla.*)',
          }
      ],
      "destination": "/",
      "permanent": false
    }]
  }
}
