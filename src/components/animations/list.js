/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/components/animations/list.js
 *
 *  @flow
 *  @prettier
 */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Fade = styled.div`
  opacity: ${prop('from', 0)};

  webkit-animation: fade ${prop('duration')}s ease-in-out forwards;
  -webkit-animation-delay: ${prop('delay')}s;
  -moz-animation: fade ${prop('duration')}s ease-in-out forwards;
  -moz-animation-delay: ${prop('delay')}s;
  -o-animation: fade ${prop('duration')}s ease-in-out forwards;
  -o-animation-delay: ${prop('delay')}s;
  animation: fade ${prop('duration')}s ease-in-out forwards;
  animation-delay: ${prop('delay')}s;

  @-webkit-keyframes fade {
    100% {
      opacity: ${prop('to', 1)};
    }
  }

  @-moz-keyframes fade {
    100% {
      opacity: ${prop('to', 1)};
    }
  }

  @-o-keyframes fade {
    100% {
      opacity: ${prop('to', 1)};
    }
  }

  @keyframes fade {
    100% {
      opacity: ${prop('to', 1)};
    }
  }

  height: ${prop('height')};
`;

type IProps = {
  children: any,
  duration: number,
  delay: number,
};

export const FadeList = ({ children = [], duration = 1, delay = 70 }: IProps) => (
  <Fragment>
    {(Array.isArray(children) ? children : [children]).map((item, index) => (
      <Fade duration={duration} delay={delay * index / 1000} key={item.key || item.id}>
        {item}
      </Fade>
    ))}
  </Fragment>
);
