'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9dd1e1d9.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["my-rating.cjs",[[1,"my-rating",{"maxValue":[2,"max-value"],"value":[1026],"starList":[32]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
