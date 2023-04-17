import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/doge/',
  title: 'Home',
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
      { text: '开始', link: '/guide/getting-started' },
      {
        text: 'HTML',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'W3C',
            link: ''
          }
        ]
      },
      {
        text: 'CSS',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'W3C',
            link: ''
          }
        ]
      },
      {
        text: 'JavaScript',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'W3C',
            link: ''
          }
        ]
      },
      {
        text: '前端框架',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'vue2',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'vue',
                collapsible: true,
                collapsed: true,
                items: [
                  { text: '构造函数', link: '/vue2/constructor.md' },
                  { text: '响应式系统', link: '/vue2/responsive-system.md' },
                  { text: '渲染器', link: '/vue2/renderer.md' },
                  { text: '编译器', link: '/vue2/compiler.md' }
                ]
              },
              { text: 'vue-router', link: '' },
              { text: 'vuex', link: '' },
              { text: 'vue-cli', link: '' },
              { text: 'vue ssr', link: '' },
              { text: '组件库', link: '' }
            ]
          },
          {
            text: 'vue3',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'vue', link: '' },
              { text: 'vue-router', link: '' },
              { text: 'pinia', link: '' },
              { text: 'vuex', link: '' },
              { text: 'vue-cli', link: '' },
              { text: 'vue ssr', link: '' }
            ]
          },
          {
            text: 'react',
            collapsible: true,
            collapsed: true,
            items: [{ text: 'react基础', link: '/react/react-base.md' }]
          }
        ]
      },
      {
        text: '渲染框架',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Nuxt', link: '' },
          { text: 'Next', link: '' }
        ]
      },
      {
        text: '构建工具',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'webpack', link: '' },
          { text: 'vite', link: '' }
        ]
      },
      {
        text: '微信',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '公众号', link: '' },
          { text: '小程序', link: '' },
          { text: '开放平台', link: '' },
          { text: '微信支付', link: '' }
        ]
      },
      {
        text: 'uniapp',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: 'Node.js',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: 'Node.js 服务框架',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Express', link: '' },
          { text: 'Koa', link: '' },
          { text: 'Nest', link: '' },
          { text: 'Strapi', link: '' }
        ]
      },
      {
        text: '常用库',
        collapsible: true,
        collapsed: true,
        items: [{ text: 'throttle-debounce', link: '' }]
      },
      {
        text: '学习网站',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/docs/MDN/Community/Contributing/Getting_started' },
          { text: 'npm', link: '' },
          { text: 'github', link: '' }
        ]
      },
      {
        text: 'Java',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: 'Dart',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: 'Futter',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: 'Android',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: 'IOS',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: '计算机组成原理',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: '操作系统',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: '数据结构',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: '计算机网络',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: '其他',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '青玉案·元夕', link: '/poetries/p1' },
          { text: '沁园春·雪', link: '/poetries/p2' },
          { text: '三体语录', link: '/blogs/b1' },
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
