/**
 *  @Module
 *  src/containers/dashboard/index.js
 * 
 *  @flow
 *  @prettier
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Fade } from '../../components/animations';
import { Dashboard } from './dashboard';
import { getStorageItem } from '../../utils/localStorage';
import { SESSION } from '../../constants/storage';

type IProps = {
  history: Object,
}

export class AuthorizedCore extends React.Component {
  props: IProps;

  componentDidMount() {
    const { history } = this.props;

    const session = getStorageItem({ key: SESSION });

    if (!session) {
      history.push('/auth');
    }
  }

  render() {
    return (
      <Fade from={0} to={1} duration={1} delay={0}>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Fade>
    );
  }
};