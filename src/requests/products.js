/**
 *  @Module
 *  src/requests/auth.js
 *
 *  @flow
 *  @prettier
 */

import { request } from '../utils/request';
import { getAuthHeader, getApiPath } from '../utils/api';
import { getProducts } from '../store/actions/products';
import { startProgressbar, stopProgressbar } from '../store/actions/behavior';
import { LOADER_PRODUCTS } from '../constants/loaders';

export const fetchProducts = (body) => (dispatch) => {
  dispatch(startProgressbar(LOADER_PRODUCTS));
  return request({
    path: `${getApiPath()}/products`,
    method: 'GET',
    body,
    headers: {
      ...getAuthHeader(),
      'Content-Type': 'application/json',
    },
  })
    .then((values) => {
      dispatch(stopProgressbar(LOADER_PRODUCTS));
      dispatch(getProducts(values));
    })
    .catch((e) => {
      dispatch(stopProgressbar(LOADER_PRODUCTS));
      return Promise.reject(e);
    });
};
