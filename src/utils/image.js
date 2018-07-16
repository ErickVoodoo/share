/**
 *  @Module
 *  src/utils/image.js
 *
 *  @flow
 *  @prettier
 */

export const SIZES = [130, 604, 1280];

export const getImageUrl = (uuid: string, size: ?number): string =>
  `__API_PATH__/uploads/${uuid.substr(0, 2)}/${uuid.substr(2, 2)}/${uuid}${
    size ? `.${size}x${size}` : ''
  }.jpg`;
