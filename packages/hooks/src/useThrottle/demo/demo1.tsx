/**
 * title: 基础用法
 * desc: throttleValue 每隔 500ms 变化一次
 */
import React, { useState } from 'react';
import { useThrottle } from 'zlHooks';

export default () => {
  const [value, setValue] = useState<string>();
  const throttleValue = useThrottle(value, { wait: 500 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="typed value"
        style={{ width: '280px' }}
      />
      <p style={{ marginTop: 16 }}>throttleValue: {throttleValue}</p>
    </div>
  );
};
