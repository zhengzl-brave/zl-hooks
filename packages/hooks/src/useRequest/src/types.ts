export type Service<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>;

export interface Options<TData, TParams extends any[]> {
  // 是否手动触发请求
  manual?: boolean;

  // defaultParams?: TParams,
  // 监听请求中的状态
  onBefore?: (params: TParams) => void;
  onSuccess?: (data: TData, params: TParams) => void;
  onError?: (e: Error, params: TParams) => void;
  onFinally?: (params: TParams, data?: TData, e?: Error) => void;
}
