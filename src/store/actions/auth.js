/**
 *  @Module
 *  src/store/actions/auth.js
 *
 *  @flow
 *  @prettier
 */

export const AUTH_SUCCESS = 'auth/AUTH_SUCCESS';

export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';

export const AUTH_CLEAR = 'auth/AUTH_CLEAR';

export const postLogin = (payload) => ({
  type: AUTH_SUCCESS,
  payload,
});
