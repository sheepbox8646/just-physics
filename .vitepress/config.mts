import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Just Physics",
  description: "转为中国高中生打造的物理教材",
  themeConfig: {
    outline: {
      label: '索引',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    editLink: {
      text: '编辑此页面',
      pattern: 'https://github.com/sheepbox8646/just-physics/tree/main/docs/:path',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sheepbox8646/just-physics' }
    ],
    sidebar: {
      '/content/': [
        {
          text: '前言',
          link: '/content'
        },
        {
          text: 'Chapter1 - 运动学',
          link: '/content/chapter1',
          collapsed: false,
          items: [
            {
              text: '1.1 - 基础知识',
              link: '/content/chapter1/基础知识'
            },
            {
              text: '1.2 - 位移，速度，时间，加速度的关系',
              link: '/content/chapter1/位移，速度，时间，加速度的关系'
            },
            {
              text: '1.3 - 匀变速直线运动',
              link: '/content/chapter1/匀变速直线运动'
            }
          ]
        }
      ]
    }
  },
  markdown: {
    math: true
  },
})
