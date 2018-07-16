/**
 *  @Module
 *  src/utils/api.js
 * 
 *  @flow
 *  @prettier
 */

export const getApiPath = (version: string = 'v1'): string =>
  `http://127.0.0.1:8079/api/${version}`;

export const getTokenFromStorage = (): string => {
  if (window.localStorage) {
    const store = window.localStorage.getItem('store');
    const token = (JSON.parse(store) && JSON.parse(store).auth && JSON.parse(store).auth.token) || '';
    return token;
  }

  return '';
};

export const getAuthHeader = (): Object => {
  const result = {};

  if (getTokenFromStorage()) {
    result.Authorization = `Bearer ${getTokenFromStorage()}`;
  }

  return result;
};
