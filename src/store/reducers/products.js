/**
 *  @Module
 *  src/store/reducers/auth.js
 *
 *  @flow
 *  @prettier
 */

import { PRODUCTS_SUCCESS } from '../actions/products';

const initialState = {
  list: [],
  meta: {},
};

type IPayload = {
  type: string,
  payload: any,
};

export default function products(store = initialState, { type, payload }: IPayload) {
  switch (type) {
    case PRODUCTS_SUCCESS: {
      if (payload) {
        return Object.assign({}, store, { 
          list: payload.response.products,
          meta: payload.response.meta,
        });
      }

      return store;
    }

    default:
      return store;
  }
}
