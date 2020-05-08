import { a as patchEsm, b as bootstrapLazy } from './index-bc59fff3.js';
var defineCustomElements = function (win, options) { return patchEsm().then(function () {
    return bootstrapLazy([["my-rating", [[1, "my-rating", { "maxValue": [2, "max-value"], "value": [1026], "starList": [32] }]]]], options);
}); };
export { defineCustomElements };
