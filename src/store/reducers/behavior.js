/**
 *  @Module
 *  src/store/reducers/behavior.js
 *
 *  @flow
 *  @prettier
 */

import { START_PROGRESSBAR, STOP_PROGRESSBAR } from '../actions/behavior';

const initialState = {
  progressbars: [],
};

type IPayload = {
  type: string,
  payload: any,
};

export default function behavior(store = initialState, { type, payload }: IPayload) {
  switch (type) {
    case START_PROGRESSBAR: {
      if (payload) {
        store.progressbars.push(payload);
        return {
          progressbars: store.progressbars,
        };
      }

      return store;
    }

    case STOP_PROGRESSBAR: {
      if (payload) {
        return {
          progressbars: store.progressbars.filter((v) => v !== payload),
        };
      }

      return store;
    }

    default:
      return store;
  }
}
