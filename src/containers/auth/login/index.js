/**
 *  @Module
 *  src/containers/auth/login/index.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Field, SubmissionError, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { validation } from './validation';
import { Flex, Input, Button, Form, Text, ErrorFormMessage, Loader } from '../../../components';
import { login } from '../../../requests/auth';

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
  actionLogin: Function,
  handleSubmit: Function,
  error: string,
  history: Object,
  loading: boolean,
};

class Login extends React.Component {
  props: IProps;

  onSubmit = (values) => {
    const { actionLogin, history } = this.props;
    return actionLogin(values)
      .then(() => {
        history.push('/dashboard');
      })
      .catch(({ error }) => {
        if (error.message) {
          throw new SubmissionError({ _error: error.message });
        }
      });
  };

  render() {
    const { handleSubmit, error, loading } = this.props;

    return (
      <FormLogin onSubmit={handleSubmit(this.onSubmit)}>
        <Flex align={'center'} justify={'flex-end'} size={1}>
          <ErrorFormMessage visible={error}>{error}</ErrorFormMessage>
          <Loader visible={loading} />
        </Flex>
        <Flex column minWidth={'300px'} width={'30%'} align={'center'} justify={'center'} size={2}>
          <Text h3 weight={800} align={'left'} width={'100%'}>
            Авторизация
          </Text>
          <Field name={'email'} component={Input} label={'Логин'} />
          <Field name={'password'} component={Input} label={'Пароль'} type={'password'} />
          <Button secondary type={'submit'} animated={loading} width={'160px'}>
            Войти
          </Button>
        </Flex>
        <Flex size={1} />
      </FormLogin>
    );
  }
}

export const LoginScreen = compose(
  connect(
    ({ behavior }) => ({
      loading: !!behavior.progressbars.includes('login'),
    }),
    {
      actionLogin: login,
    },
  ),
  reduxForm({
    form: 'login',
    validate: validation,
  }),
)(Login);
