/**
 *  @Module
 *  src/constants/validation.js
 *
 *  @flow
 *  @prettier
 */

import { isEmail } from 'validator';

export const required = (v = '', f) => (v ? null : `Поле ${f} не заполнено`);
export const email = (v = '', f) => (isEmail(v) ? null : `Поле ${f} должно быть адресом почты`);
