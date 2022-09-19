import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/doge/',
  title: 'ChenYanfei',
  description: 'ChenYanfei的文档',
  head: [
    ['link', { rel: 'icon', href: '/doge/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://fastly.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css' }],
    // ['script', { src: '/doge/live2d-widget/autoload.js' }],
    ['script', { src: '/live2d-widget/autoload.js' }]
  ],
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: [
      {
        text: '无题',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '图片展示', link: '/guide/getting-started' },
          { text: '青玉案·元夕', link: '/poetries/p1' },
          { text: '沁园春·雪', link: '/poetries/p2' },
          { text: '三体语录', link: '/blogs/b1' },
          { text: '代码规范', link: 'blogs/b2' },
          { text: 'three.js 案例', link: 'blogs/b3' },
          { text: 'OpenCV', link: 'blogs/b4' }
        ]
      },
      {
        text: 'vue2',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '构造函数', link: '/vue2/constructor.md' },
          { text: '响应式系统', link: '/vue2/responsive-system.md' },
          { text: '渲染器', link: '/vue2/renderer.md' },
          { text: '编译器', link: '/vue2/compiler.md' }
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
