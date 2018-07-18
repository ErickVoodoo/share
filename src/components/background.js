/**
 *  @Module
 *  src/components/background.js
 * 
 *  @flow
 *  @prettier
 */

import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Flex } from './flex';

const TopLeft = styled.div`
  width: 40%;
  background-color: ${prop('theme.colors.primary')};
`;

const TopRight = styled.div`
  width: 60%;
  background-color: ${prop('theme.colors.primary2')};
`;

const BottomLeft = styled.div`
  width: 60%;
  background-color: ${prop('theme.colors.primary3')};
`;

const BottomRight = styled.div`
  width: 40%;
  background-color: ${prop('theme.colors.primary4')};
`;

const Container = styled.div`
  position: absolute;
  margin: auto;
  height: 100%;
  width: 100%;
  transform: scale(2) rotate(-30deg) translateX(50px);
`;

export const Background = () => (
  <Container>
    <Flex row size={1} height={'50%'}>
      <TopLeft />
      <TopRight />
    </Flex>
    <Flex row size={1} height={'50%'}>
      <BottomLeft />
      <BottomRight />
    </Flex>
  </Container>
);