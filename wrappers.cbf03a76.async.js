(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{MZF8:function(e,n,t){"use strict";var o=t("ogwx");t.d(n,"a",(function(){return o["b"]}));t("VCU9")},OYlG:function(e,n,t){"use strict";t.r(n);var o=t("5A5o"),r=t("rjBl"),u=t.n(r),s=t("RGYn"),a=t("3yyd"),i=t("jJS9"),c=t("md9Q"),l="import React, { useState } from 'react';\nimport { useDebounce } from 'zlHooks';\n\nexport default () => {\n  const [value, setValue] = useState<string>();\n  const debouncedValue = useDebounce(value, { wait: 500 });\n\n  return (\n    <div>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        placeholder=\"typed value\"\n        style={{ width: '280px' }}\n      />\n      <p style={{ marginTop: 16 }}>debouncedValue: {debouncedValue}</p>\n    </div>\n  );\n};",d="import React, { useState } from 'react';\nimport { useDebounceFn } from 'zlHooks';\nexport default () => {\n  const [value, setValue] = useState(0);\n  const { run } = useDebounceFn(\n    () => {\n      setValue(value + 1);\n    },\n    {\n      wait: 1000,\n    },\n  );\n\n  return (\n    <div>\n      <p style={{ marginTop: '16px' }}>Click count: {value}</p>\n      <button type=\"button\" onClick={run}>\n        Click fast\n      </button>\n    </div>\n  );\n};",p="import React, { useState, useEffect } from 'react';\nimport { useLatest } from 'zlHooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n  const latestCountRef = useLatest(count);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCount(latestCountRef.current + 1);\n    }, 1000);\n    return () => clearInterval(interval);\n  }, []);\n\n  return <p>count: {count}</p>;\n};",m="import React, { useState, useCallback } from 'react';\nimport { message } from 'antd';\nimport { useMemoizedFn } from 'zlHooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  const callbackFn = useCallback(() => {\n    message.info(`Current count is ${count}`);\n  }, [count]);\n\n  const memoizedFn = useMemoizedFn(() => {\n    message.info(`Current count is ${count}`);\n  });\n\n  return (\n    <>\n      <p>Count: {count}</p>\n      <button\n        type=\"button\"\n        onClick={() => {\n          setCount((c) => c + 1);\n        }}\n      >\n        Add Count\n      </button>\n      <div style={{ marginTop: 16 }}>\n        <button type=\"button\" onClick={callbackFn}>\n          callbackFn\n        </button>\n        <button type=\"button\" style={{ marginLeft: 8 }} onClick={memoizedFn}>\n          memoizedFn\n        </button>\n      </div>\n    </>\n  );\n};",f="import { useMemoizedFn } from 'zlHooks';\nimport { message } from 'antd';\nimport React, { useState, useRef, useCallback } from 'react';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  //   const ref = useRef(count);\n  //   ref.current = count;\n  const callbackFn = useCallback(() => {\n    // message.info(`Current count is ${ref.current}`);\n    message.info(`Current count is ${count}`);\n  }, [count]);\n\n  const memoizedFn = useMemoizedFn(() => {\n    message.info(`Current count is ${count}`);\n  });\n\n  return (\n    <>\n      <p>count: {count}</p>\n      <button\n        type=\"button\"\n        onClick={() => {\n          setCount((c) => c + 1);\n        }}\n      >\n        Add Count\n      </button>\n\n      <p>You can click the button to see the number of sub-component renderings</p>\n\n      <div style={{ marginTop: 32 }}>\n        <h3>component with useCallbackFn</h3>\n        <ExpensiveTree showCount={callbackFn} />\n      </div>\n\n      <div style={{ marginTop: 32 }}>\n        <h3>component with useMemoizedFn</h3>\n        <ExpensiveTree showCount={memoizedFn} />\n      </div>\n    </>\n  );\n};\n\nconst ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {\n  const renderCountRef = useRef(0);\n  renderCountRef.current += 1;\n\n  return (\n    <div>\n      <p>Render Count: {renderCountRef.current}</p>\n      <button type=\"button\" onClick={showCount}>\n        showParentCount\n      </button>\n    </div>\n  );\n});",b="import React, { useState } from 'react';\nimport { useThrottle } from 'zlHooks';\n\nexport default () => {\n  const [value, setValue] = useState<string>();\n  const throttleValue = useThrottle(value, { wait: 500 });\n\n  return (\n    <div>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        placeholder=\"typed value\"\n        style={{ width: '280px' }}\n      />\n      <p style={{ marginTop: 16 }}>throttleValue: {throttleValue}</p>\n    </div>\n  );\n};",h="import React, { useState } from 'react';\nimport { useThrottleFn } from 'zlHooks';\n\nexport default () => {\n  const [value, setValue] = useState(0);\n  const { run } = useThrottleFn(\n    () => {\n      setValue(value + 1);\n    },\n    {\n      wait: 1000,\n    },\n  );\n\n  return (\n    <div>\n      <p style={{ marginTop: 16 }}>Clicked count: {value}</p>\n      <button type=\"button\" onClick={run}>\n        Click fast\n      </button>\n    </div>\n  );\n};",v="import React, { useState } from 'react';\nimport { useTimeout } from 'zlHooks';\n\nexport default () => {\n  const [state, setState] = useState(0);\n\n  useTimeout(() => {\n    setState(state + 1);\n  }, 1000);\n\n  return (\n    <div>\n      <p>timer state: {state}</p>\n    </div>\n  );\n};",k="import React, { useState } from 'react';\nimport { useTimeout } from 'zlHooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n  const [delay, setDelay] = useState(1000);\n\n  const clear = useTimeout(() => {\n    setCount(count + 1);\n  }, delay);\n\n  return (\n    <div>\n      <p>count: {count} </p>\n      <p>delay: {delay} </p>\n      <button onClick={() => setDelay((t) => (!!t ? t + 1000 : 1000))}>\u5ef6\u8fdf\u65f6\u95f4 + 1s</button>\n      <button onClick={() => setDelay(1000)}>\u91cd\u7f6e\u65f6\u95f4 1s</button>\n      <button onClick={clear}>\u6e05\u9664</button>\n    </div>\n  );\n};",g="import React from 'react';\nimport { useToggle } from 'zlHooks';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle();\n  return (\n    <div>\n      <p>Effects: {`${state}`}</p>\n      <p>\n        <button onClick={toggle}>toggle</button>\n        <button onClick={setLeft}>Toggle False</button>\n        <button onClick={setRight}>Toggle True</button>\n      </p>\n    </div>\n  );\n};",w="import React from 'react';\nimport { useToggle } from 'zlHooks';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight, set }] = useToggle('hello', 'world');\n  return (\n    <div>\n      <p>Effect: {state}</p>\n      <p>\n        <button onClick={toggle}>Toggle</button>\n        <button onClick={() => set('hello')} style={{ margin: '0 8px' }}>\n          set Hello\n        </button>\n        <button onClick={() => set('world')}>set World</button>\n        <button onClick={setLeft} style={{ margin: '0 8px' }}>\n          SetLeft\n        </button>\n        <button onClick={setRight}>SetRight</button>\n      </p>\n    </div>\n  );\n};",C="import React from 'react';\nimport { useUpdate } from 'zlHooks';\n\nexport default () => {\n  const update = useUpdate();\n\n  return (\n    <>\n      <div>Time: {Date.now()}</div>\n      <button type=\"button\" onClick={update} style={{ marginTop: 8 }}>\n        update\n      </button>\n    </>\n  );\n};",x={"usedebounce-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"eWij"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>DebouncedValue \u53ea\u4f1a\u5728\u8f93\u5165\u7ed3\u675f 500ms \u540e\u53d8\u5316\u3002</p></div>',identifier:"usedebounce-demo1"}},"usedebouncefn-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"tHpm"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>setValue \u53ea\u4f1a\u5728 1000ms \u7ed3\u675f\u540e\u518d\u6267\u884c\u8be5\u65b9\u6cd5\u3002</p></div>',identifier:"usedebouncefn-demo1"}},"uselatest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>useLatest \u8fd4\u56de\u7684\u6c38\u8fdc\u662f\u6700\u65b0\u7684\u503c</p></div>',identifier:"uselatest-demo1"}},"usememoizedfn-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"yQWC"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:">=16.9.0"},antd:{version:"5.11.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>useMemoizedFn \u4e0e useCallback \u53ef\u4ee5\u5b9e\u73b0\u540c\u6837\u7684\u6548\u679c\u3002</p></div>',identifier:"usememoizedfn-demo1"}},"usememoizedfn-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"lkYe"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{antd:{version:"5.11.0"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},title:"useMemoizedFn \u51fd\u6570\u5730\u5740\u4e0d\u4f1a\u53d8\u5316\uff0c\u53ef\u4ee5\u7528\u4e8e\u6027\u80fd\u4f18\u5316",hideActions:["CSB"],description:'<div class="markdown"><p>\u793a\u4f8b\u4e2d <code>memoizedFn</code> \u662f\u4e0d\u4f1a\u53d8\u5316\u7684\uff0c<code>callbackFn</code> \u5728 count \u53d8\u5316\u65f6\u53d8\u5316\u3002</p></div>',identifier:"usememoizedfn-demo2"}},"usethrottle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"aFWa"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>throttleValue \u6bcf\u9694 500ms \u53d8\u5316\u4e00\u6b21</p></div>',identifier:"usethrottle-demo1"}},"usethrottlefn-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"rXjo"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u9891\u7e41\u8c03\u7528 run\uff0c\u4f46\u662f\u53ea\u4f1a\u6bcf\u9694 1000ms \u6267\u884c\u4e00\u6b21\u76f8\u5173\u51fd\u6570\u3002</p></div>',identifier:"usethrottlefn-demo1"}},"usetimeout-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"6sIe"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u5728 1000 ms \u540e\u6267\u884c\u56de\u8c03\u51fd\u6570</p></div>',identifier:"usetimeout-demo1"}},"usetimeout-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"Fo4X"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:k}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u52a8\u6001\u4fee\u6539 delay \u6267\u884c</p></div>',identifier:"usetimeout-demo2"}},"usetoggle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",description:'<div class="markdown"><p>\u9ed8\u8ba4\u4e3a boolean \u5207\u6362\uff0c\u57fa\u7840\u7528\u6cd5\u4e0e useBoolean \u4e00\u6837</p></div>',identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:w}},dependencies:{react:{version:"18.2.0"}},title:"\u4efb\u610f\u4e24\u4e2a\u503c\u4e4b\u95f4\u7684\u5207\u6362",description:'<div class="markdown"><p>\u63a5\u6536\u4e24\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u5728\u5b83\u4eec\u4e4b\u95f4\u505a\u5207\u6362</p></div>',identifier:"usetoggle-demo2"}},"useupdate-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(17),t.e(3)]).then(t.bind(null,"INwW"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:C}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",description:'<div class="markdown"><p>\u5f3a\u5236\u66f4\u65b0\u7ec4\u4ef6\u6e32\u67d3</p></div>',identifier:"useupdate-demo1"}}},y=t("Zs1V"),j=t("92Oi"),O=t.n(j);n["default"]=e=>u.a.createElement(O.a,Object(o["a"])({},e,{config:s,demos:x,apis:y}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"},{"path":"/hooks/use-debounce-fn","title":"useDebounceFn"},{"path":"/hooks/use-debounce","title":"useDebounce"},{"path":"/hooks/use-throttle-fn","title":"useThrottleFn"},{"path":"/hooks/use-throttle","title":"useThrottle"},{"path":"/hooks/use-memoized-fn","title":"useMemoizedFn"},{"path":"/hooks/use-timeout","title":"useTimeout"},{"path":"/hooks/use-latest","title":"useLatest"},{"path":"/hooks/use-update","title":"useUpdate"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"zl react hooks","logo":"/zl-hooks/logo.jpg","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);