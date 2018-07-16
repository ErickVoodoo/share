/**
 *  @Module
 *  src/containers/authorized/map/index.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { Fade } from '../../../components/animations';
import { Loader } from '../../../components';

export class Map extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Fade from={0} to={1} duration={1} delay={0}>
        Map
        <Loader visible={true} />
      </Fade>
    );
  }
}
