'use strict';

const tc = require('fast-type-check');

console.log('"123" is a string:', tc.isString("123"));
console.log('123 is a string:', tc.isString(123));
