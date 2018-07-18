/**
 *  @Module
 *  src/containers/dashboard/index.js
 *
 *  @flow
 *  @prettier
 */

import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Flex, Loader, Card, Text } from '../../../components';
import { fetchProducts } from '../../../requests/products';
import { LOADER_PRODUCTS } from '../../../constants/loaders';
import { FadeList } from '../../../components/animations';

type IProps = {
  actionGetProducts: Function,
};

const Container = Flex.extend`
  overflow-x: hidden;
  height: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export class View extends React.Component {
  props: IProps;

  componentDidMount() {
    const { actionGetProducts } = this.props;
    actionGetProducts();
  }

  render() {
    const { loading, list } = this.props;

    return (
      <Container column>
        <Loader visible={loading} />
        {!loading && <Fragment>
          <Text h2>
            Последние добавленные
          </Text>
          <CardContainer>
            <FadeList duration={1} delay={300}>
              {list.map((item) => 
                <Card key={item.id} {...item} />
              )}
            </FadeList>
          </CardContainer>
        </Fragment>}
      </Container>
    );
  }
}

export const DashboardContainer = compose(
  connect(
    ({ behavior, products }) => ({
      loading: !!behavior.progressbars.includes(LOADER_PRODUCTS),
      list: products.list,
      meta: products.meta,
    }),
    {
      actionGetProducts: fetchProducts,
    },
  ),
)(View);

