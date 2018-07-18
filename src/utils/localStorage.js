/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/utils/localStorage.js
 *
 *  @flow
 *  @prettier
 */

import localForage from 'localforage';

type ISet = {
  key: string,
  value: string,
};

export const getStorageItem = ({ key }: { key: string }): string => {
  if (localForage) {
    return localForage.getItem(key) || '';
  }

  return '';
};

export const setStorageItem = ({ key, value = '' }: ISet): void => {
  if (localForage) {
    return localForage.setItem(key, typeof value === 'object' && value ? JSON.stringify(value) : value);
  }
};

export const removeStorageItem = ({ key }: { key: string }): void => {
  if (localForage) {
    return localForage.removeItem(key);
  }
};

export const clearStorage = (): void => {
  if (localForage) {
    return localForage.clear();
  }
};
