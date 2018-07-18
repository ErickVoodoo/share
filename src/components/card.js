/**
 *  @Module
 *  src/components/card.js
 * 
 *  @flow
 *  @prettier
 */

import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Text } from './text';
import { Flex } from './flex';
import { getImageUrl, SIZES } from '../utils/image';

const Shadow = styled.div`
  transition: all 0.3s ease-in-out;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${prop('theme.colors.gray_200')};
  opacity: 0.4;
`;

const Container = Flex.extend`
  position: relative;
  width: 400px;
  height: 256px;
  flex-shrink: 0;
  cursor: pointer;
  overflow: hidden;
  background-image: url(${prop('image')});
  background-size: cover;
  background-position: 50%;

  ${Text} {
    z-index: 1;
  }

  :hover {
    ${Shadow} {
      transform: translateY(100%);
      opacity: 1;
    }

    ${Text} {
      text-shadow: 2px 2px ${prop('theme.colors.text')};
    }
  }
`;

type IProps = {

};

export const Card = ({ title, price, images, category: { name } }: IProps) => (
  <Container column align={'center'} justify={'center'} image={getImageUrl(images[0].id, SIZES.medium)}>
    <Shadow />
    <Text white h3>{price}</Text>
    <Text white h1 weight={'bold'} align={'center'} overflow style={{ margin: '12px 0' }}>{title}</Text>
    <Text white h2>{name}</Text>
  </Container>
);