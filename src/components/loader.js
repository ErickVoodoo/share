/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/components/Loader.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import theme from '../constants/theme';

export const Container = styled.div`
  box-sizing: border-box;
  transition: all 0.8s ease-in-out;
  max-width: 600px
  width: 100%;
  max-height: 0;
  opacity: 0;

  ${ifProp(
    'visible',
    css`
      max-height: 100%;
      opacity: 1;
    `,
  )}
`;

type IProps = {
  visible: boolean,
};

export const Loader = ({ visible }: IProps) => (
  <Container visible={visible}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="100%">
      <rect id="main" x="0" y="0" width="50" height="10" fill={theme.colors.gray_220} />
      <rect id="additional-1" x="0" y="16" width="150" height="8" fill={theme.colors.gray_220} />
      <rect id="additional-2" x="160" y="16" width="0" height="8" fill={theme.colors.gray_220} />
      <animate
        xlinkHref="#main"
        attributeName="width"
        from="50"
        to="300"
        dur="3s"
        repeatCount="indefinite"
      />
      <animate
        id="anim2"
        xlinkHref="#additional-1"
        attributeName="width"
        from="0"
        to="150"
        dur="0.5s"
        begin="0s; anim2.end+0.5s"
      />
      <animate
        id="anim3"
        xlinkHref="#additional-2"
        attributeName="width"
        from="0"
        to="50"
        dur="0.5s"
        begin="0.5s; anim3.end+0.5s"
      />
    </svg>
  </Container>
);
