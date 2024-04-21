import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/doge/',
  title: '首页',
  description: '文档',
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
        text: '文学作品',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '青玉案·元夕', link: '/poetries/p1' },
          { text: '沁园春·雪', link: '/poetries/p2' },
          { text: '三体语录', link: '/blogs/b1' }
          // { text: '代码规范', link: 'blogs/b2' },
          // { text: 'three.js 案例', link: 'blogs/b3' },
          // { text: 'OpenCV', link: 'blogs/b4' }
        ]
      },
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
          },
          {
            text: 'unocss',
            link: 'https://unocss.dev/'
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
          },
          {
            text: 'Svelte',
            link: 'https://www.svelte.cn/'
          },
          {
            text: 'Solid',
            link: 'https://www.solidjs.com/'
          },
          {
            text: 'Qwik',
            link: 'https://qwik.builder.io/docs/'
          }
        ]
      },
      {
        text: '渲染框架',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Nuxt', link: '' },
          { text: 'Next', link: '' },
          { text: 'Remix', link: '' },
          { text: 'Gatsby', link: '' }
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
        text: '移动端和客户端',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Electron', link: '' },
          { text: 'Tauri', link: 'https://tauri.app/zh-cn/' }
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
        items: [
          { text: 'throttle-debounce', link: '' },
          { texxt: 'Nano ID', link: 'https://github.com/ai/nanoid' },
          { texxt: 'vue-qr', link: 'https://github.com/Binaryify/vue-qr' }
        ]
      },
      {
        text: '学习网站',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/docs/MDN/Community/Contributing/Getting_started' },
          { text: 'npm', link: '' },
          { text: 'github', link: '' },
          { text: 'state of js', link: 'https://2022.stateofjs.com/zh-Hans/' }
        ]
      },
      {
        text: 'Java',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: 'C',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '阮一峰C语言教程',
            link: 'https://wangdoc.com/clang/'
          }
        ]
      },
      {
        text: 'C++',
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
        text: '计算机图形学',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '概述',
            link: '/graphic/overview.md'
          },
          {
            text: 'web图形',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'three.js', link: '/web_graphic/three.md' },
              { text: 'webgl', link: '/web_graphic/webgl.md' },
              { text: 'webgpu', link: '/web_graphic/webgpu.md' },
              { text: 'vulkan', link: 'https://vulkan-tutorial.com/'},
              { text: 'Metal', link: 'https://developer.apple.com/cn/metal/'},
              { text: 'DirectX', link: 'https://learn.microsoft.com/zh-cn/windows/win32/directx' }
            ]
          },
        ]
      },
      {
        text: '数据库',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'mysql',
            link: 'https://dev.mysql.com/doc/refman/5.7/en/'
          }
        ]
      },
      {
        text: '游戏引擎',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'FXGL',
            link: 'https://github.com/AlmasB/FXGL'
          },
          {
            text: 'Pixel',
            link: 'https://github.com/faiface/pixel'
          },
          {
            text: 'Eva.js',
            link: 'https://eva-engine.gitee.io/'
          },
          {
            text: 'Cocos2d-x',
            link: 'https://docs.cocos.com/cocos2d-x/manual/zh/'
          }
        ]
      },
      {
        text: '嵌入式',
        collapsed: true,
        collapsible: true,
        items: [
          {
            text: 'c51',
            link: ''
          },
          {
            text: 'stm32',
            link: ''
          },
          {
            text: 'arm',
            link: ''
          }
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
