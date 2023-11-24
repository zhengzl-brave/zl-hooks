import useMemoizedFn from '../useMemoizedFn';
import { useEffect, useRef, useCallback } from 'react';
import { isNumber } from '../utils';

type noop = () => void;

const useTimeout = (fn: noop, delay?: number) => {
  // fn 持久化 usCallback
  const timerCallback = useMemoizedFn(fn);
  const timerRef = useRef(null);
  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) return;

    timerRef.current = setTimeout(timerCallback, delay);

    // 周期结束后清除定时器
    return clear;
  }, [delay]);

  // 正常调用 setTimeout 会拿到一个 clear
  return clear;
};

export default useTimeout;
