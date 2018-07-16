/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/store/reducers/core.js
 *
 *  @flow
 *  @prettier
 */

const initialState = {};

type IPayload = {
  type: string,
  payload: any,
};

export default function core(store: Object = initialState, { type, payload }: IPayload) {
  switch (type) {
    case '': {
      return store;
    }

    default:
      return store;
  }
}
