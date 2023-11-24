/**
 * title: 基础用法
 * desc: DebouncedValue 只会在输入结束 500ms 后变化。
 */
import React, { useState } from 'react';
import { useDebounce } from 'zlHooks';

export default () => {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="typed value"
        style={{ width: '280px' }}
      />
      <p style={{ marginTop: 16 }}>debouncedValue: {debouncedValue}</p>
    </div>
  );
};
