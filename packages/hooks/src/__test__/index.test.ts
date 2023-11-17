import * as zlHooks from '..';

// 期望导出的 hooks 是可以用的，即都是被定义的
describe('zlHooks', () => {
  test('export module should be defined', () => {
    Object.keys(zlHooks).forEach((module) => {
      expect(zlHooks[module]).toBeDefined();
    });
  });
});
