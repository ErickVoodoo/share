/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/components/Hint.js
 * 
 *  @flow
 *  @prettier
 */

import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const Label = styled.label`
  font-family: 'Roboto';
  font-weight: 200;
  font-size: 14px;
  padding: 4px 0px;
  flex: 1;

  ${ifProp('right', css`text-align: right;`)}
`;