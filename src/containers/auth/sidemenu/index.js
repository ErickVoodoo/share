/**
 *  @Module
 *  src/containers/auth/sidemenu/index.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

import { Text, Flex } from '../../../components';

const Container = styled(Flex)`
  width: 384px;
  height: 100%;
  box-shadow: 3px 1px 13px 5px #e6e6e6;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Top = styled(Flex)`
  flex: 1;
  width: 100%;
  background-color: ${prop('theme.colors.primary3')};
`;

const Middle = styled(Flex)`
  flex: 1;
  width: 100%;
  background: linear-gradient(${prop('theme.colors.primary3')}, ${prop('theme.colors.white')});
`;

const Bottom = styled(Flex)`
  flex: 1;
  width: 100%;
  background: ${prop('theme.colors.white')};
`;

export const Sidemenu = () => (
  <Container column>
    <Top align={'center'} justify={'center'}>
      <Text white h1 align={'center'} padding={20}>
        Ищите что-нибудь пожалуйста
      </Text>
    </Top>
    <Flex column size={1}>
      <Middle align={'center'} justify={'center'}>
        <Text white h1 align={'center'} padding={20}>
          И находите то, что нужно
        </Text>
      </Middle>
      <Bottom />
    </Flex>
  </Container>
);
