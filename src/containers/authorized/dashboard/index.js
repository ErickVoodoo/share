/**
 *  @Module
 *  src/containers/dashboard/index.js
 * 
 *  @flow
 *  @prettier
 */

import React from 'react';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom';
import { Flex } from '../../../components';

import { Map } from '../map';
import { Entity } from '../entity';

export class Dashboard extends React.Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <Flex row>
        <Flex column size={1}>
          <div>dashboard</div>
          <NavLink to="/dashboard/map">map</NavLink>
          <NavLink to="/dashboard/entity">entity</NavLink>
        </Flex>
        <Flex column size={9}>
          <Switch>
            <Route path='/dashboard/map' component={Map} />
            <Route path='/dashboard/entity' component={Entity} />
            <Redirect to='/dashboard/map' />
          </Switch>
        </Flex>
      </Flex>
    );
  }
};