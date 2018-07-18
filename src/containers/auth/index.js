/**
 *  @Module
 *  src/containers/auth/core.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Flex } from '../../components';
import { Sidemenu } from './sidemenu';

import { LoginScreen } from './login';
import { SESSION } from '../../constants/storage';
import { getStorageItem } from '../../utils/localStorage';
import { Background } from '../../components/background';

type IProps = {
  history: Object,
};

const containerStyle = {
  overflow: 'hidden',
};

export class AuthCore extends React.Component {
  props: IProps;

  componentDidMount = async () => {
    const { history } = this.props;

    const session = await getStorageItem({ key: SESSION });

    if (session) {
      history.push('/dashboard');
    }
  }

  render() {
    return (
      <Flex row height={'100%'} style={containerStyle}>
        <Background />
        <Sidemenu />
        <Flex size={1} align={'center'} justify={'center'}>
          <Route path="/auth/login" component={LoginScreen} />
          <Redirect to={'/auth/login'} />
        </Flex>
      </Flex>
    );
  }
}
