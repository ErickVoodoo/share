/**
 *  @Module
 *  src/containers/auth/login/validation.js
 *
 *  @flow
 *  @prettier
 */

import { required, email as validationEmail } from '../../../constants/validation';

export const validation = (values) => {
  const { email, password } = values;
  const errors = {};

  !errors.email && (errors.email = required(email, 'логин'));
  !errors.email && (errors.email = validationEmail(email, 'логин'));

  !errors.password && (errors.password = required(password, 'пароль'));

  return errors;
};
