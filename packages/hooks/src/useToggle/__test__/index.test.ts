// 要测试 hooks 需要用 renderHook,意思是等同于我们调用 hooks, act 就等同于执行

import { renderHook, act } from '@testing-library/react';
import useToogle from '../index';

const callToggle = (hook: any) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};
describe('useToggle', () => {
  // 测试初始化没值的时候是不是为false
  it('test on init', () => {
    const hook = renderHook(() => useToogle());
    // console.log('hook', hook)
    expect(hook.result.current[0]).toBeFalsy();
  });

  // 测试两个值：hello, world
  it('test on option', () => {
    const hook = renderHook(() => useToogle('hello', 'world'));
    callToggle(hook);
    expect(hook.result.current[0]).toBe('world');
    callToggle(hook);
    expect(hook.result.current[0]).toBe('hello');
    callToggle(hook);
    act(() => {
      hook.result.current[1].set('world');
    });
    expect(hook.result.current[0]).toBe('world');
  });
});
