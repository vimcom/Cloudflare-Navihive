import { DefaultTheme } from 'vitepress';

export const zhConfig: DefaultTheme.Config = {
  nav: [
    { text: '首页', link: '/zh/' },
    { text: '指南', link: '/zh/guide/' },
    { text: '功能', link: '/zh/features/' },
    { text: 'API', link: '/zh/api/' },
    { text: '部署', link: '/zh/deployment/' },
    {
      text: '更多',
      items: [
        { text: '安全', link: '/zh/security/' },
        { text: '高级', link: '/zh/advanced/' },
        { text: '贡献', link: '/zh/contributing/' },
      ],
    },
    { text: '在线演示', link: 'https://navihive.chatbot.cab/' },
  ],

  sidebar: {
    '/zh/guide/': [
      {
        text: '用户指南',
        items: [
          { text: '概览', link: '/zh/guide/' },
          { text: '快速开始', link: '/zh/guide/getting-started' },
          { text: '安装配置', link: '/zh/guide/installation' },
          { text: '部署指南', link: '/zh/guide/deployment' },
          { text: '使用教程', link: '/zh/guide/usage' },
          { text: '版本迁移', link: '/zh/guide/migration' },
        ],
      },
    ],
    '/zh/features/': [
      {
        text: '功能特性',
        items: [
          { text: '功能概览', link: '/zh/features/' },
          { text: '认证系统', link: '/zh/features/authentication' },
          { text: '访客模式', link: '/zh/features/guest-mode' },
          { text: '拖拽排序', link: '/zh/features/drag-drop' },
          { text: '自定义设置', link: '/zh/features/customization' },
          { text: '数据导入导出', link: '/zh/features/import-export' },
          { text: '主题系统', link: '/zh/features/themes' },
        ],
      },
    ],
    '/zh/api/': [
      {
        text: 'API 文档',
        items: [
          { text: 'API 概览', link: '/zh/api/' },
          { text: '认证 API', link: '/zh/api/authentication' },
          { text: '分组 API', link: '/zh/api/groups' },
          { text: '站点 API', link: '/zh/api/sites' },
          { text: '配置 API', link: '/zh/api/configs' },
          { text: '类型定义', link: '/zh/api/types' },
        ],
      },
    ],
    '/zh/deployment/': [
      {
        text: '部署文档',
        items: [
          { text: '部署概览', link: '/zh/deployment/' },
          { text: 'Cloudflare Workers', link: '/zh/deployment/cloudflare' },
          { text: 'D1 数据库设置', link: '/zh/deployment/database' },
          { text: '环境变量配置', link: '/zh/deployment/environment' },
          { text: '自定义域名', link: '/zh/deployment/custom-domain' },
        ],
      },
    ],
    '/zh/security/': [
      {
        text: '安全文档',
        items: [
          { text: '安全概览', link: '/zh/security/' },
          { text: '认证安全', link: '/zh/security/authentication' },
          { text: '最佳实践', link: '/zh/security/best-practices' },
          { text: '已知问题', link: '/zh/security/vulnerabilities' },
        ],
      },
    ],
    '/zh/advanced/': [
      {
        text: '高级主题',
        items: [
          { text: '架构设计', link: '/zh/advanced/architecture' },
          { text: '数据库结构', link: '/zh/advanced/database-schema' },
          { text: '本地开发', link: '/zh/advanced/development' },
          { text: '故障排除', link: '/zh/advanced/troubleshooting' },
        ],
      },
    ],
    '/zh/contributing/': [
      {
        text: '贡献指南',
        items: [
          { text: '贡献概览', link: '/zh/contributing/' },
          { text: '代码风格', link: '/zh/contributing/code-style' },
          { text: 'PR 流程', link: '/zh/contributing/pull-request' },
          { text: '测试指南', link: '/zh/contributing/testing' },
        ],
      },
    ],
  },

  docFooter: {
    prev: '上一页',
    next: '下一页',
  },

  outline: {
    label: '页面导航',
    level: [2, 3],
  },

  lastUpdated: {
    text: '最后更新于',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium',
    },
  },

  darkModeSwitchLabel: '主题',
  sidebarMenuLabel: '菜单',
  returnToTopLabel: '回到顶部',

  editLink: {
    pattern: 'https://github.com/zqq-nuli/Cloudflare-Navihive/edit/main/docs/:path',
    text: '在 GitHub 上编辑此页面',
  },
};
