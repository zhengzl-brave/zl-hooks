// 进行状态更新 re-render
import { useState, useCallback } from 'react';
const useUpdate = () => {
  const [, setState] = useState({});

  // 我们这里的状态不需要变更
  return useCallback(() => setState({}), []);
};

export default useUpdate;
