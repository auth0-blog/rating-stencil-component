import { p as patchBrowser, b as bootstrapLazy } from './index-bc59fff3.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-rating",[[1,"my-rating",{"maxValue":[2,"max-value"],"value":[1026],"starList":[32]}]]]], options);
});
