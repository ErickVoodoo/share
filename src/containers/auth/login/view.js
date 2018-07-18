/**
 *  @Module
 *  src/containers/auth/login/index.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import { Flex, Input, Button, Form, Text, ErrorFormMessage, Loader } from '../../../components';


const FormLogin = styled(Form)`
  position: relative;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0;
    justify-content: center;
  }
`;

type IProps = {
  handleSubmit: Function,
  error: string,
  loading: boolean,
  onSubmit: Function,
};

const CustomForm = Flex.extend`
  > * {
    margin-bottom: 8px;
  }
`;

export const View = ({ handleSubmit, error, loading, onSubmit }: IProps) => (
  <FormLogin onSubmit={handleSubmit(onSubmit)}>
    <Flex align={'center'} justify={'flex-end'} size={1}>
      <ErrorFormMessage visible={error}>{error}</ErrorFormMessage>
      <Loader visible={loading} />
    </Flex>
    <CustomForm column minWidth={'300px'} width={'30%'} align={'center'} justify={'center'} size={2}>
      <Text h3 weight={800} align={'left'} width={'100%'}>
        Авторизация
      </Text>
      <Field name={'email'} component={Input} label={'Логин'} />
      <Field name={'password'} component={Input} label={'Пароль'} type={'password'} />
      <Button white type={'submit'} animated={loading} width={'160px'}>
        Войти
      </Button>
    </CustomForm>
    <Flex size={1} />
  </FormLogin>
);