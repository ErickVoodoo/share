/**
 *  @Module
 *  src/store/actions/behavior.js
 * 
 *  @flow
 *  @prettier
 */

export const START_PROGRESSBAR = 'behavior/START_PROGRESSBAR';

export const STOP_PROGRESSBAR = 'behavior/STOP_PROGRESSBAR';

export const startProgressbar = (payload) => ({
  type: START_PROGRESSBAR,
  payload,
});

export const stopProgressbar = (payload) => ({
  type: STOP_PROGRESSBAR,
  payload,
});
