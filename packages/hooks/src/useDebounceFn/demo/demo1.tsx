/**
 * title: 基础用法
 * desc: setValue 只会在 1000ms 结束后再执行该方法。
 */

import React, { useState } from 'react';
import { useDebounceFn } from 'zlHooks';
export default () => {
  const [value, setValue] = useState(0);
  const { run } = useDebounceFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 1000,
    },
  );

  return (
    <div>
      <p style={{ marginTop: '16px' }}>Click count: {value}</p>
      <button type="button" onClick={run}>
        Click fast
      </button>
    </div>
  );
};
