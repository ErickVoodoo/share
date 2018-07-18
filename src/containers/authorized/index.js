/**
 *  @Module
 *  src/containers/dashboard/index.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Fade } from '../../components/animations';
import { DashboardContainer } from './dashboard';
import { getStorageItem } from '../../utils/localStorage';
import { SESSION } from '../../constants/storage';
import { Header, Flex } from '../../components';
import { Map } from './map';
import { Entity } from './entity';
import { Background } from '../../components/background';

type IProps = {
  history: Object,
};

const Container = styled(Flex)`
  background-color: ${prop('theme.colors.primary2')};
  height: 100%;
  overflow: hidden;
`;

const Content = styled(Flex)`
  overflow-y: auto;
`;

export class AuthorizedCore extends React.Component {
  props: IProps;

  componentDidMount = async () => {
    const { history } = this.props;

    const session = await getStorageItem({ key: SESSION });

    if (!session) {
      history.push('/auth');
    }
  }

  render() {
    return (
      <Fade from={0} to={1} duration={1} delay={0} height={'100%'}>
        <Container column>
          <Background />
          <Header />
          <Content column size={1}>
            <Switch>
              <Route exact path="/dashboard" component={DashboardContainer} />
              <Route exact path="/dashboard/map" component={Map} />
              <Route exact path="/dashboard/entity" component={Entity} />
              <Redirect to="/dashboard" />
            </Switch>
          </Content>
        </Container>
      </Fade>
    );
  }
}
