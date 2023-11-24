import { throttle } from 'lodash-es';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';
import { useMemo, useEffect, useRef } from 'react';

type noop = (...args: any[]) => any;
export interface ThrottleOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

function useThrottleFn<T extends noop>(fn: T, options?: ThrottleOptions) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useThrottleFn expected parameter is a function, got ${typeof fn}`);
    }
  }

  const ref = useRef(fn);
  ref.current = fn;

  const wait = options?.wait ?? 1000;

  const throttled = useMemo(
    () =>
      throttle(
        (...args: Parameters<T>): ReturnType<T> => {
          return ref.current(...args);
        },
        wait,
        options,
      ),
    [],
  );

  useEffect(() => {
    return () => {
      throttled.cancel();
    };
  }, []);

  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush,
  };
}

export default useThrottleFn;
