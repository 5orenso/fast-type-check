/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2016-2019 Øistein Sørensen
 * Licensed under the MIT license.
 */

'use strict';

const path = require('path');

const appPath = path.normalize(`${__dirname}/../`);
const fastTypeCheckPath = `${appPath}lib/fastTypeCheck`;

// eslint-disable-next-line
const FastTypeCheck = require(fastTypeCheckPath);

module.exports = FastTypeCheck;
