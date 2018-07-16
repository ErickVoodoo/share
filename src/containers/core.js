/**
 *  @Module
 *  src/containers/core.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import { Toolbox } from './toolbox';
import { AuthCore } from './auth';
import { AuthorizedCore } from './authorized';

const App = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={() => (
        <div>
          <NavLink to="/">core</NavLink>
          <NavLink to="/auth/login">auth</NavLink>
          <NavLink to="/toolbox">toolbox</NavLink>
        </div>
      )}
    />
    <Route path="/auth" component={AuthCore} />
    <Route path="/dashboard" component={AuthorizedCore} />
    <Route path="/toolbox" component={Toolbox} />
  </Switch>
);

export default App;
