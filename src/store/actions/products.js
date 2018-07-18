/**
 *  @Module
 *  src/store/actions/auth.js
 *
 *  @flow
 *  @prettier
 */

export const PRODUCTS_SUCCESS = 'products/PRODUCTS_SUCCESS';

export const getProducts = (payload) => ({
  type: PRODUCTS_SUCCESS,
  payload,
});
