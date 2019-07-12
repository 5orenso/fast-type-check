'use strict';

const tc = require('fast-type-check');

console.log('[] is an array:', tc.isArray([]));
console.log('{} is an array:', tc.isArray({}));
