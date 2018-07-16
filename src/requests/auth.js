/**
 *  @Module
 *  src/requests/auth.js
 *
 *  @flow
 *  @prettier
 */

import { request } from '../utils/request';
import { getAuthHeader, getApiPath } from '../utils/api';
import { postLogin } from '../store/actions/auth';
import { startProgressbar, stopProgressbar } from '../store/actions/behavior';
import { setStorageItem } from '../utils/localStorage';
import { SESSION } from '../constants/storage';

export const login = (body) => (dispatch) => {
  dispatch(startProgressbar('login'));
  return request({
    path: `${getApiPath()}/login`,
    method: 'POST',
    body,
    headers: {
      ...getAuthHeader(),
      'Content-Type': 'application/json',
    },
  })
    .then((values) => {
      dispatch(stopProgressbar('login'));
      dispatch(postLogin(values));
      setStorageItem({ key: SESSION, value: JSON.stringify(values) });
    })
    .catch((e) => {
      dispatch(stopProgressbar('login'));
      return Promise.reject(e);
    });
};
