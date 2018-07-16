/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/components/Text.js
 *
 *  @flow
 *  @prettier
 */

import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const Text = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: ${prop('theme.colors.text')};
  font-weight: 400;

  ${ifProp(
    'h1',
    css`
      font-size: 32px;
    `,
  )} ${ifProp(
      'h2',
      css`
        font-size: 28px;
      `,
    )} ${ifProp(
      'h3',
      css`
        font-size: 20px;
      `,
    )} ${ifProp(
      'h4',
      css`
        font-size: 16px;
      `,
    )} ${ifProp(
      'h5',
      css`
        font-size: 14px;
      `,
    )} ${ifProp(
      'h6',
      css`
        font-size: 13px;
      `,
    )} ${ifProp(
      'white',
      css`
        color: ${prop('theme.colors.white')};
      `,
    )} ${ifProp(
      'padding',
      css`
        padding: ${prop('padding')}px;
      `,
    )} ${ifProp(
      'align',
      css`
        text-align: ${prop('align')};
      `,
    )} ${ifProp(
      'red',
      css`
        color: ${prop('theme.colors.error')};
      `,
    )} ${ifProp(
      'primary',
      css`
        color: ${prop('theme.colors.primary')};
      `,
    )} ${ifProp(
      'secondary',
      css`
        color: ${prop('theme.colors.secondary')};
      `,
    )} ${ifProp(
      'weight',
      css`
        font-weight: ${prop('weight')};
      `,
    )} width: ${prop('width')};
`;
