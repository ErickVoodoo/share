/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/components/ErrorContainer.js
 *
 *  @flow
 *  @prettier
 */

import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const ErrorFormMessage = styled.div`
  box-sizing: border-box;
  margin-bottom: 16px;
  transition: all 0.8s ease-in-out;
  max-width: 600px
  width: 100%;
  max-height: 0;
  opacity: 0;
  background-color: ${prop('theme.colors.gray_240')};
  color: ${prop('theme.colors.primary3')};
  padding: 20px;
  box-shadow: 1px 1px 13px 1px ${prop('theme.colors.gray_240')};

  ${ifProp(
    'visible',
    css`
      max-height: 100%;
      opacity: 1;
    `,
  )}
`;
