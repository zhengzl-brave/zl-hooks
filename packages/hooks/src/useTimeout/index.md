---
nav:
  path: /hooks
---

# useTimeout

通过传入 function 及延迟时间 delay，完成 setTimeout 功能。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx" />

### 性能提升

<code hideActions='["CSB"]' src="./demo/demo2.tsx" />

## API

```typescript
const timer = useTimeout(fn: () => void, delay?: number);
```

### Params

| 参数  | 说明                   | 类型                      | 默认值 |
| ----- | ---------------------- | ------------------------- | ------ |
| delay | 延迟时间               | `number`                  | -      |
| fn    | 传入需要执行延迟的函数 | `(...args: any[]) => any` |
