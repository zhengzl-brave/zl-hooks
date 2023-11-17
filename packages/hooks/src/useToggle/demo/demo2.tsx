/**
 * title: 任意两个值之间的切换
 * desc: 接收两个可选参数，在它们之间做切换
 */
import React from 'react';
import { useToggle } from 'zlHooks';

export default () => {
  const [state, { toggle, setLeft, setRight, set }] = useToggle('hello', 'world');
  return (
    <div>
      <p>Effect: {state}</p>
      <p>
        <button onClick={toggle}>Toggle</button>
        <button onClick={() => set('hello')} style={{ margin: '0 8px' }}>
          set Hello
        </button>
        <button onClick={() => set('world')}>set World</button>
        <button onClick={setLeft} style={{ margin: '0 8px' }}>
          SetLeft
        </button>
        <button onClick={setRight}>SetRight</button>
      </p>
    </div>
  );
};
