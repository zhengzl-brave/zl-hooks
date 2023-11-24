import { renderHook } from '@testing-library/react';
import useLatest from '..';

const setUp = (val) => renderHook((state) => useLatest(state), { initialProps: val });

describe('useLatest', () => {
  it('useLatest get the new value latest with basic', () => {
    const { result, rerender } = setUp(0);

    rerender(1);
    expect(result.current.current).toBe(1);

    rerender(2);
    expect(result.current.current).toBe(2);

    rerender(3);
    expect(result.current.current).toBe(3);
  });

  it('useLatest get the new value latest with reference', () => {
    const { result, rerender } = setUp({});

    expect(result.current.current).toEqual({});

    rerender([]);
    expect(result.current.current).toEqual([]);
  });
});
