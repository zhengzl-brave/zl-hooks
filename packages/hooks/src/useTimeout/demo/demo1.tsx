/**
 * title: 基础用法
 * desc: 在 1000 ms 后执行回调函数
 */
import React, { useState } from 'react';
import { useTimeout } from 'zlHooks';

export default () => {
  const [state, setState] = useState(0);

  useTimeout(() => {
    setState(state + 1);
  }, 1000);

  return (
    <div>
      <p>timer state: {state}</p>
    </div>
  );
};
