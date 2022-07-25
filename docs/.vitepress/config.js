import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/doge/',
  title: '炸牛屎来不来',
  description: '炸牛屎来不来，陈雁飞的文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '阅读', link: '/guide/getting-started' },
      { text: '青玉案·元夕', link: '/poetries/p1'}
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: '阅读', link: '/guide/getting-started' },
          { text: '青玉案·元夕', link: '/poetries/p1'},
          { text: 'Webpack搭建Vue项目', link: '/blogs/b1'}
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/BombCowpat/doge' }],
    editLink: {
      pattern: 'https://github.com/BombCowpat/doge/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
