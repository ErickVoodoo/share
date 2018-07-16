/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/index.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/global.css';
import App from './containers/core';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import { Router } from './navigation/router';
import { Store } from './store';

import 'normalize.css';
import theme from './constants/theme';

ReactDOM.render(
  <Store>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Store>,
  document.getElementById('root'),
);
registerServiceWorker();
