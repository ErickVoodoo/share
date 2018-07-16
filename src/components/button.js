/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/components/Button.js
 *
 *  @flow
 *  @prettier
 */

import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const Button = styled.button`
  flex-shrink: 0;
  transition: all 0.2s ease-in-out;
  min-width: 100px;
  height: 40px;
  font-size: 14px;
  padding: 0px 16px;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background-color: ${prop('theme.colors.default')};
  color: ${prop('theme.colors.secondary')};

  &:hover,
  &:active {
    background-color: ${prop('theme.colors.defaultColored')};
  }

  ${ifProp(
    'primary',
    css`
      color: ${prop('theme.colors.white')};
      background-color: ${prop('theme.colors.primary')};

      &:hover,
      &:active {
        background-color: ${prop('theme.colors.primaryDark')};
      }
    `,
  )} ${ifProp(
      'secondary',
      css`
        opacity: 1;
        color: ${prop('theme.colors.white')};
        background-color: ${prop('theme.colors.secondary')};

        &:hover,
        &:active {
          background-color: ${prop('theme.colors.secondaryDark')};
        }
      `,
    )} ${ifProp(
      'red',
      css`
        opacity: 1;
        color: ${prop('theme.colors.white')};
        background-color: ${prop('theme.colors.error')};

        &:hover,
        &:active {
          background-color: ${prop('theme.colors.errorDark')};
        }
      `,
    )} ${ifProp(
      'round',
      css`
        border-radius: 20px;
      `,
    )} &:disabled {
    cursor: not-allowed;
    opacity: 1;
    background-color: ${prop('theme.colors.default')};
    color: ${prop('theme.colors.gray_200')};
  }

  width: ${prop('width')};

  ${ifProp(
    'animated',
    css`
      cursor: progress;
      background: linear-gradient(-45deg, #81d4fa, #29b6f6, #0288d1, #01579b);
      background-size: 400% 400%;
      -webkit-animation: animate 3s ease infinite;
      -moz-animation: animate 3s ease infinite;
      animation: animate 3s ease infinite;

      @-webkit-keyframes animate {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @-moz-keyframes animate {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @keyframes animate {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `,
  )};
`;
