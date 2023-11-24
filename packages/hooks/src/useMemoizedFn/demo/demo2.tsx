/**
 * title: useMemoizedFn 函数地址不会变化，可以用于性能优化
 * desc: 示例中 `memoizedFn` 是不会变化的，`callbackFn` 在 count 变化时变化。
 */
import { useMemoizedFn } from 'zlHooks';
import { message } from 'antd';
import React, { useState, useRef, useCallback } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  //   const ref = useRef(count);
  //   ref.current = count;
  const callbackFn = useCallback(() => {
    // message.info(`Current count is ${ref.current}`);
    message.info(`Current count is ${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    message.info(`Current count is ${count}`);
  });

  return (
    <>
      <p>count: {count}</p>
      <button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </button>

      <p>You can click the button to see the number of sub-component renderings</p>

      <div style={{ marginTop: 32 }}>
        <h3>component with useCallbackFn</h3>
        <ExpensiveTree showCount={callbackFn} />
      </div>

      <div style={{ marginTop: 32 }}>
        <h3>component with useMemoizedFn</h3>
        <ExpensiveTree showCount={memoizedFn} />
      </div>
    </>
  );
};

const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div>
      <p>Render Count: {renderCountRef.current}</p>
      <button type="button" onClick={showCount}>
        showParentCount
      </button>
    </div>
  );
});
