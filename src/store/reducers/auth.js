/**
 *  @Module
 *  src/store/reducers/auth.js
 *
 *  @flow
 *  @prettier
 */

import { AUTH_SUCCESS, LOGOUT_SUCCESS, AUTH_CLEAR } from '../actions/auth';

const initialState = {};

type IPayload = {
  type: string,
  payload: any,
};

export default function auth(store = initialState, { type, payload }: IPayload) {
  switch (type) {
    case AUTH_SUCCESS: {
      if (payload) {
        return {
          token: payload.response.token,
          ...payload.response.user,
        };
      }

      return store;
    }

    case AUTH_CLEAR:
    case LOGOUT_SUCCESS: {
      return initialState;
    }

    default:
      return store;
  }
}
