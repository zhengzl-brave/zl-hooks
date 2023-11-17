// 实现 CDN 代码产出 umd
const merge = require('webpack-merge');
const common = require('../../webpack.common');
const path = require('path');

module.exports = merge(common, {
  // 入口是解析 es 的产物

  entry: './es/index.js',
  output: {
    filename: 'zlHooks.js',
    library: 'zlHooks', // 暴露库 windwo.zlHooks 可以这样用
    path: path.resolve(__dirname, './dist'),
  },
});
