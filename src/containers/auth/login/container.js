/**
 *  @Module
 *  src/containers/auth/login/container.js
 * 
 *  @flow
 *  @prettier
 */

import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { SubmissionError, reduxForm } from 'redux-form';
import { validation } from './validation';

import { login } from '../../../requests/auth';

import { View } from './view';

export const LoginScreen = compose(
  connect(
    ({ behavior }) => ({
      loading: !!behavior.progressbars.includes('login'),
    }),
    {
      actionLogin: login,
    },
  ),
  withHandlers({
    onSubmit: ({ actionLogin, history }) => (values) => 
      actionLogin(values)
        .then(() => {
          history.push('/dashboard');
        })
        .catch(({ error }) => {
          if (error.message) {
            throw new SubmissionError({ _error: error.message });
          }
        }),
  }),
  reduxForm({
    form: 'login',
    validate: validation,
  }),
)(View);
