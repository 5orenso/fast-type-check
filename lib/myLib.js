/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2016-2019 Øistein Sørensen
 * Licensed under the MIT license.
 */

'use strict';

class MyLib {
    constructor(text = '') {
        this.text = text;
    }

    run() {
        this.text = 'Yo!';
        return this.say();
    }

    say() {
        return this.text;
    }
}

module.exports = MyLib;
