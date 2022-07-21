import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/doge/',
  title: 'VitePress',
  description: 'docs',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'home', link: '/' },
      { text: 'start', link: '/guide/getting-started' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
