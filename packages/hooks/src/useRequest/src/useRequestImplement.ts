import useLatest from 'zlHooks/lib/useLatest';
import type { Service, Options } from './types';
import useUpdate from 'zlHooks/lib/useUpdate';
import Fetch from './Fetch';

function useRequestImplement<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
  plugin?: [],
) {
  // 是否手动触发
  const { manual, ...rest } = options;

  // 通过接收 promise 类型的请求，根据返回结果去封装一个请求的方法
  const fetchOptions = {
    manual,
    ...rest,
  };

  // 保证能够实时获取最新的 service
  const serviceRef = useLatest(service);

  // 请求完成后，需要触发页面视图更新
  const update = useUpdate();

  const fetchInstance = (() => {
    // fetch 的构造函数执行
    return new Fetch<TData, TParams>(serviceRef, options, update);
  })();

  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params,
    run: fetchInstance.run,
    runAsync: fetchInstance.runAsync,
  };
}

export default useRequestImplement;
