// service fetch 请求下的生命周期
// options
// plugin

import type { Service, Options } from './types';
import useRequestImplement from './useRequestImplement';
function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  plugin?: [],
) {
  // 处理请求相关实例
  return useRequestImplement<TData, TParams>(service, options, [...(plugin || [])]);
}

export default useRequest;
