/**
 *  @Module
 *  src/components/header.js
 * 
 *  @flow
 *  @prettier
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Flex } from './';
import { clearStorage } from '../utils/localStorage';

const Container = Flex.extend`
  transition: all 0.2s ease-in-out;
  height: 96px;
  width: 100%;
  padding: 0px 16px;

  :hover {
    background-color: ${prop('theme.colors.primary')};
    box-shadow: 1px 0px 14px -1px ${prop('theme.colors.primary1')};
  }
`;

const Bar = Flex.extend`
  > * {
    margin-left: 16px;
  }
`;

const HeaderButtonText = styled.div`
  color: ${prop('theme.colors.white')};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Roboto';
`;

const HeaderButton = styled(NavLink)`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  height: 48px;
  min-width: 128px;
  width: 128px;
  outline: none;
  display: flex;
  border: 2px solid ${prop('theme.colors.white')};
  align-items: center;
  justify-content: center;
  border-radius: 3px;

  &.active {
    background-color: ${prop('theme.colors.primary3')};
  }

  :hover {
    background-color: ${prop('theme.colors.primary3')};
  }

  :hover, :visited, :link, :active {
    text-decoration: none;
  }
`;

type IProps = {
  children: any,
  to: string,
};

const Button = ({ children, to = '/', ...props }: IProps) => (
  <HeaderButton to={to} {...props}>
    <HeaderButtonText>
      {children}
    </HeaderButtonText>
  </HeaderButton>
);

export const Header = () => (
  <Container row align={'center'} justify={'space-between'}>
      <Flex size={1}>

      </Flex>
      <Bar row size={2} align={'center'} justify={'flex-end'}>
        <Button exact to={'/dashboard'}>Главная</Button>
        <Button exact to={'/dashboard/entity'}>Поиск</Button>
        <Button exact to={'/dashboard/map'}>Карта</Button>
        <Button exact to={'/dashboard/profile'}>Профиль</Button>
        <Button exact onClick={clearStorage}>Выйти</Button>
      </Bar>
  </Container>
);