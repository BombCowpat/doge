import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/doge/',
  title: '小伙子别冲了',
  description: 'docs',
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
          { text: '青玉案·元夕', link: '/poetries/p1'}
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
