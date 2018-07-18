/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/store/store.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { getStorageItem, setStorageItem } from '../utils/localStorage';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import core from './reducers/core';
import auth from './reducers/auth';
import behavior from './reducers/behavior';
import products from './reducers/products';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getJsonStore = (): ?Object => {
  try {
    const store = getStorageItem({ key: 'store' });

    if (!store) {
      return undefined;
    }

    const side = {};
    Object.keys(JSON.parse(store)).forEach((key) => {
      side[key] = JSON.parse(store)[key];
    });

    return side;
  } catch (err) {
    return undefined;
  }
};

// Function to set stringified store to localStorage
const setJsonStore = (state): void => {
  try {
    const store = JSON.stringify(state);
    setStorageItem({ key: 'store', value: store });
  } catch (err) {
    // Ignore
  }
};

// State from localStorage
const persistedState = getJsonStore();

const config = {
  key: 'primary',
  storage,
  blacklist: ['form', 'behavior'],
  whitelist: ['core', 'auth', 'products'],
};

const reducers = persistCombineReducers(config, {
  core,
  auth,
  behavior,
  products,
  form: formReducer,
});

const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

// If store changes - write all data to localstorage
store.subscribe(() => {
  setJsonStore(store.getState());
});

type IProps = {
  children: any,
};

export const Store = ({ children }: IProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      {children}
    </PersistGate>
  </Provider>
);
