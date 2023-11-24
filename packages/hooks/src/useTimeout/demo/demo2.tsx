/**
 * title: 基础用法
 * desc: 动态修改 delay 执行
 */
import React, { useState } from 'react';
import { useTimeout } from 'zlHooks';

export default () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  const clear = useTimeout(() => {
    setCount(count + 1);
  }, delay);

  return (
    <div>
      <p>count: {count} </p>
      <p>delay: {delay} </p>
      <button onClick={() => setDelay((t) => (!!t ? t + 1000 : 1000))}>延迟时间 + 1s</button>
      <button onClick={() => setDelay(1000)}>重置时间 1s</button>
      <button onClick={clear}>清除</button>
    </div>
  );
};
