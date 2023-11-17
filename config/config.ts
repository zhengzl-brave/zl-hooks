import { menus } from './hooks';

// const packages = require('../packages/hooks/package.json');

export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      // 按需加载能力
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'zl react hooks',
  // '/' 会找到 public
  favicon: '/avatar.jpg',
  logo: '/logo.jpg',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    zlHooks: `${process.cwd()}/packages/hooks/src/index.ts`,
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    // 加载对应主题包中的样式
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
};
