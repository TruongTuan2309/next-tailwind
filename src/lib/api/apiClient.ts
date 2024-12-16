/* eslint-disable no-useless-catch */
import { BASE_URL } from '@/configs/env';
import { buildQueryString } from '@/lib/utils/common';
import JSCookies from 'js-cookie';

export const apiClient = async <T, P>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  queryApi?: P,
  configHeaders?: Record<string, string>,
) => {
  const accessToken = JSCookies.get('accessToken');
  const url = `${BASE_URL}${endpoint}${method === 'GET' ? buildQueryString(queryApi!) : ''}`;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: `Bearer ${accessToken}`,
    ...configHeaders,
  };
  const executeRequest = async () => {
    const response = await fetch(url, {
      method,
      headers,
      body: method !== 'GET' ? JSON.stringify(queryApi) : undefined,
    });

    if (response.ok) {
      return response.json() as T;
    }
    throw response;
  };
  try {
    return await executeRequest();
  } catch (error: any) {
    // if (error.status === 401) {
    //   if (isRefreshing) {
    //     return new Promise((resolve, reject) => {
    //       failedQueue.push({ resolve, reject })
    //     }).then(() => executeRequest())
    //   }

    //   isRefreshing = true
    //   const refreshToken = JSCookies.get('refreshToken')

    //   try {
    //     const response = await fetch(`${BASE_URL}/auth/refresh`, {
    //       method: 'POST',
    //       headers,
    //       body: JSON.stringify({ refreshToken })
    //     })

    //     if (response.ok) {
    //       const data = await response.json()
    //       JSCookies.set('accessToken', data.accessToken)
    //       isRefreshing = false
    //       processQueue()
    //       return executeRequest()
    //     } else {
    //       processQueue(new Error('Failed to refresh token'))
    //       JSCookies.remove('accessToken')
    //       JSCookies.remove('refreshToken')
    //       window.location.href = '/login'
    //       throw new Error('Failed to refresh token')
    //     }
    //   } catch (refreshError) {
    //     processQueue(refreshError)
    //     throw refreshError
    //   }
    // }
    throw error;
  }
};
