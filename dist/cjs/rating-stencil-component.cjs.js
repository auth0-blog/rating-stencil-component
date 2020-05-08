'use strict';

const index = require('./index-9dd1e1d9.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["my-rating.cjs",[[1,"my-rating",{"maxValue":[2,"max-value"],"value":[1026],"starList":[32]}]]]], options);
});
