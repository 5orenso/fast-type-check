/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2016-2019 Øistein Sørensen
 * Licensed under the MIT license.
 */

'use strict';

const path = require('path');

const appPath = path.normalize(`${__dirname}/../`);
const myApp = `${appPath}lib/myLib`;

// eslint-disable-next-line
const App = require(myApp);
const app = new App();

module.exports = app;
