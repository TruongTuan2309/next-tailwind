import { apiClient } from '@/lib/api/apiClient';
import useSWR, { SWRConfiguration } from 'swr';

export const useGetRequest = <T, P = void>(
  url: string,
  queryParams?: P,
  config?: SWRConfiguration,
) => {
  const fetcher = async (url: string) => {
    const response: T = await apiClient<T, P>(url, 'GET', queryParams);
    return response;
  };
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    url,
    fetcher,
    config,
  );
  return { data, error, isLoading, isValidating, mutate };
};
export const usePostRequest = <T, P = void>(
  url: string,
  payload?: P,
  config?: SWRConfiguration,
) => {
  const fetcher = async (url: string) => {
    const response: T = await apiClient<T, P>(url, 'POST', payload);
    return response;
  };
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    url,
    fetcher,
    config,
  );
  return { data, error, isLoading, isValidating, mutate };
};
export const usePutRequest = <T, P = void>(
  url: string,
  payload?: P,
  config?: SWRConfiguration,
) => {
  const fetcher = async (url: string) => {
    const response: T = await apiClient<T, P>(url, 'PUT', payload);
    return response;
  };
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    url,
    fetcher,
    config,
  );
  return { data, error, isLoading, isValidating, mutate };
};
export const useDeleteRequest = <T, P = void>(
  url: string,
  payload?: P,
  config?: SWRConfiguration,
) => {
  const fetcher = async (url: string) => {
    const response: T = await apiClient<T, P>(url, 'DELETE', payload);
    return response;
  };
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    url,
    fetcher,
    config,
  );
  return { data, error, isLoading, isValidating, mutate };
};
