import { Options, Service } from './types';

import type { MutableRefObject } from 'react';

type noop = () => void;
interface FetchState<TData, TParams> {
  loading: boolean;
  data?: TData;
  params?: TParams;
  error?: Error;
}
export default class Fetch<TData, TParams extends any[]> {
  state: FetchState<TData, TParams> = {
    loading: false,
    data: undefined,
    params: undefined,
    error: undefined,
  };
  constructor(
    // MutableRefObject: useRef with typeScript
    public serviceRef: MutableRefObject<Service<TData, TParams>>,
    public options: Options<TData, TParams> = {},
    public update: noop,
  ) {
    this.state = {
      ...this.state,
      loading: !options.manual,
    };
  }

  setState(s: Partial<FetchState<TData, TParams>>) {
    this.state = {
      ...this.state,
      ...s,
    };
    this.update();
  }

  // 请求调用
  async runAsync(...params: TParams): Promise<TData> {
    this.setState({
      loading: true,
      params,
    });

    // 请求开始之前
    this.options.onBefore?.(params);

    try {
      const servicePromise = this.serviceRef.current(...params);

      const res = await servicePromise;

      this.setState({
        loading: false,
        data: res,
        error: undefined,
      });

      this.options.onSuccess?.(res, params);
      this.options.onFinally?.(params, res, undefined);

      return res;
    } catch (error) {
      this.setState({
        loading: false,
        error,
        data: undefined,
      });

      this.options.onError?.(error, params);
      this.options.onFinally?.(params, undefined, error);
      throw error;
    }
  }

  // 执行请求
  run(...params: TParams) {
    this.runAsync(...params).catch((error) => {
      // 比如请求的错误信息需要上报
      // sendLog(error)
    });
  }

  // 重新调用一遍
  refresh() {
    this.run(...this.state.params!);
  }

  refreshAsync() {
    return this.runAsync(...this.state.params!);
  }
}
