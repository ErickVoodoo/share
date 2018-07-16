/**
 *  @Module
 *  src/containers/authorized/entity/index.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { Fade } from '../../../components/animations';
import { Loader } from '../../../components';

export class Entity extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Fade from={0} to={1} duration={1} delay={0}>
        Entity
        <Loader visible={true} />
      </Fade>
    );
  }
}
