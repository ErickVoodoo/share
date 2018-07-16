/**
 *  @Module
 *  src/utils/request.js
 * 
 *  @flow
 *  @prettier
 */

import axios from 'axios';

export type Props = {
  path: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  headers?: Object;
  body?: Object;
};

export const request = ({ path: url, method = 'GET', body = {}, headers = {} }: Props)  =>
  axios({
    url,
    method,
    data: body && typeof body === 'object' && !(body instanceof FormData) ? JSON.stringify(body) : body,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
    .then((response) => {
      if (response && response.data) {
        return Promise.resolve(response.data);
      }

      return Promise.resolve(response);
    })
    .catch((e) => {
      const { data } = e.response;
      return Promise.reject(data);
    });
