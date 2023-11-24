import { useMemo, useEffect, useRef } from 'react';
import isDev from '../utils/isDev';
import { isFunction } from '../utils';
import { debounce } from 'lodash-es';

type noop = (...args: any[]) => any;

export interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useDebounceFn expected parameter is a function, got ${typeof fn}`);
    }
  }
  const wait = options?.wait ?? 1000;

  const ref = useRef(fn);
  ref.current = fn;

  const debounced = useMemo(
    () =>
      // 注意 debounce 返回一个函数
      debounce(
        (...args: Parameters<T>): ReturnType<T> => {
          //  注意，如果这里直接是用 fn(...args) 则每次都是同一个 fn，所以需要借助 useRef，表示引用对象，会指向同一个 fn，所以
          // 通过将新的 fn 赋值给 current, 引用对象是可以感知的
          return ref.current(...args);
        },
        wait,
        options,
      ),
    [],
  );

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, []);

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}

export default useDebounceFn;
