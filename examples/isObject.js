'use strict';

const tc = require('fast-type-check');

console.log('{} is an object:', tc.isObject({}));
console.log('() => {} is an object:', tc.isObject(() => {}));
