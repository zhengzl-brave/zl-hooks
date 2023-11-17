/**
 * title: 基础用法
 * desc: 默认为 boolean 切换，基础用法与 useBoolean 一样
 */
import React from 'react';
import { useToggle } from 'zlHooks';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  return (
    <div>
      <p>Effects: {`${state}`}</p>
      <p>
        <button onClick={toggle}>toggle</button>
        <button onClick={setLeft}>Toggle False</button>
        <button onClick={setRight}>Toggle True</button>
      </p>
    </div>
  );
};
