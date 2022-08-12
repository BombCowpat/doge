import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/doge/',
  title: '炸牛屎来不来',
  description: '炸牛屎来不来，陈雁飞的文档',
  head: [
    ['link', { rel: 'icon', href: '/doge/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://fastly.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css' }],
    ['script', { src: '/doge/live2d-widget/autoload.js' }],
    // ['script', { src: '/live2d-widget/autoload.js' }],
  ],
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: '阅读', link: '/guide/getting-started' },
          { text: '青玉案·元夕', link: '/poetries/p1' },
          { text: '沁园春·雪', link: '/poetries/p2' },
          { text: 'Webpack搭建Vue项目', link: '/blogs/b1' },
          { text: '代码规范', link: 'blogs/b2' },
          { text: 'three.js 案例', link: 'blogs/b3' },
          { text: 'OpenCV', link: 'blogs/b4' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/BombCowpat/doge' }],
    editLink: {
      pattern: 'https://github.com/BombCowpat/doge/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
