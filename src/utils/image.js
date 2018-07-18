/**
 *  @Module
 *  src/utils/image.js
 *
 *  @flow
 *  @prettier
 */

import { API_URL } from './api';

export const SIZES = {
  small: 130, 
  medium: 604,
  large: 1280,
};

export const getImageUrl = (uuid: string, size: ?number): string =>
  `${API_URL}/uploads/${uuid.substr(0, 2)}/${uuid.substr(2, 2)}/${uuid}${
    size ? `.${size}x${size}` : ''
  }.jpg`;
