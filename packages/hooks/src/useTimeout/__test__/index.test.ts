import { renderHook } from '@testing-library/react';
import useTimeout from '..';

const setUp = ({ fn, delay }) => renderHook(() => useTimeout(fn, delay));

describe('useTimeout', () => {
  // 模拟计时器
  jest.useFakeTimers();
  // 对应下面 clearTimeout
  jest.spyOn(global, 'clearTimeout');

  it('timeout 正常执行', () => {
    const cb = jest.fn();
    setUp({ fn: cb, delay: 20 });
    expect(cb).not.toHaveBeenCalled();
    jest.advanceTimersByTime(50);
    expect(cb).toHaveBeenCalled();
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('clear 取消', () => {
    const cb = jest.fn();
    const hook = setUp({ fn: cb, delay: 20 });
    expect(cb).not.toHaveBeenCalled();

    hook.result.current();
    jest.advanceTimersByTime(30);
    expect(cb).toHaveBeenCalledTimes(0);
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
});
