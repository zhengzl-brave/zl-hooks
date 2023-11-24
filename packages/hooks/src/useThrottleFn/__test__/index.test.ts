import { act, renderHook } from '@testing-library/react';
import useThrottleFn from '..';
import { sleep } from '../../utils/testingHelpers';

interface IParams {
  fn: (...args: any) => any;
  deps?: any[];
  wait: number;
}

const setUp = ({ fn, wait }: IParams) => renderHook(() => useThrottleFn(fn, { wait }));
let hook;

describe('useThrottleFn', () => {
  it('run, cancel and flush can be work', async () => {
    let count = 0;
    const throttleFn = (gap: number) => {
      count += gap;
    };
    act(() => {
      hook = setUp({ fn: throttleFn, wait: 500 });
    });

    await act(async () => {
      hook.result.current.run(1);
      expect(count).toBe(1);
      hook.result.current.run(1);
      hook.result.current.run(1);
      expect(count).toBe(1);

      await sleep(450);
      hook.result.current.run(2);
      expect(count).toBe(1);

      await sleep(100);
      hook.result.current.run(2);
      expect(count).toBe(3);

      hook.result.current.run(3);
      hook.result.current.run(3);
      await sleep(500);
      expect(count).toBe(6);

      hook.result.current.run(1);
      hook.result.current.run(4);
      hook.result.current.cancel();
      await sleep(500);
      expect(count).toBe(7);

      hook.result.current.run(1);
      hook.result.current.run(1);
      expect(count).toBe(8);
      hook.result.current.flush();
      expect(count).toBe(9);
      await sleep(550);
      expect(count).toBe(9);
    });
  });
});
