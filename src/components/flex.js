/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/components/Flex.js
 * 
 *  @flow
 *  @prettier
 */

import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';

export const Flex = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;

  ${ifProp(
    'white',
    css`
      background-color: ${prop('theme.colors.white')};
    `,
  )} ${ifProp(
  'size',
  css`
        flex: ${prop('size')};
      `,
)} ${ifProp(
  'row',
  css`
        flex-direction: row;
      `,
)} ${ifProp(
  'align',
  css`
        align-items: ${prop('align')};
      `,
)} ${ifProp(
  'justify',
  css`
        justify-content: ${prop('justify')};
      `,
)};

  ${ifProp(
    'kit',
    css`
      > * {
        margin-top: 8px;
        margin-left: 8px;
        width: auto !important;
      }
    `)};

  height: ${prop('height')};
  width: ${prop('width')};
  min-width: ${prop('minWidth')};
`;
