/**
 *  @Module
 *  Users/alexandermozolevsky/develop/SHARE_PROJECT/fe/share/src/navigation/router.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type IProps = {
  children: any,
};

export const Router = ({ children }: IProps) => <BrowserRouter>{children}</BrowserRouter>;
