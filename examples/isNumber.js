'use strict';

const tc = require('fast-type-check');

console.log('123 is a number:', tc.isNumber(123));
console.log('"123" is a number:', tc.isNumber("123"));
