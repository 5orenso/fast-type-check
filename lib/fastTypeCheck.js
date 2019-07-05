/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2016-2019 Øistein Sørensen
 * Licensed under the MIT license.
 */

'use strict';

class FastTypeCheck {
    static getType(element) {
        return Object.prototype.toString.call(element);
    }

    static isArray(element) {
        if (FastTypeCheck.getType(element) === '[object Array]') {
            return true;
        }
        return false;
    }

    static isObject(element) {
        if (FastTypeCheck.getType(element) === '[object Object]') {
            return true;
        }
        return false;
    }

    static isString(element) {
        if (FastTypeCheck.getType(element) === '[object String]') {
            return true;
        }
        return false;
    }

    static isDate(element) {
        if (FastTypeCheck.getType(element) === '[object Date]') {
            return true;
        }
        return false;
    }

    static isNumber(element) {
        if (FastTypeCheck.getType(element) === '[object Number]' && !isNaN(element)) {
            return true;
        }
        return false;
    }

    static isFunction(element) {
        if (FastTypeCheck.getType(element) === '[object Function]') {
            return true;
        }
        return false;
    }

    static isRegexp(element) {
        if (FastTypeCheck.getType(element) === '[object RegExp]') {
            return true;
        }
        return false;
    }

    static isBoolean(element) {
        if (FastTypeCheck.getType(element) === '[object Boolean]') {
            return true;
        }
        return false;
    }

    static isNull(element) {
        if (FastTypeCheck.getType(element) === '[object Null]') {
            return true;
        }
        return false;
    }

    static isUndefined(element) {
        if (FastTypeCheck.getType(element) === '[object Undefined]') {
            return true;
        }
        return false;
    }

    static isMongoObject(element) {
        if (FastTypeCheck.getType(element) === '[object Object]') {
            // eslint-disable-next-line
            if (element.hasOwnProperty('_id') && element._id.match(/[a-z0-9]+/i)) {
                return true;
            }
        }
        return false;
    }

    static isArrayOfObjects(element) {
        if (FastTypeCheck.isArray(element) && element.length > 0) {
            for (let i = 0, l = element.length; i < l; i += 1) {
                if (!FastTypeCheck.isObject(element[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    static isArrayOfArrays(element) {
        if (FastTypeCheck.isArray(element) && element.length > 0) {
            for (let i = 0, l = element.length; i < l; i += 1) {
                if (!FastTypeCheck.isArray(element[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    static isArrayOfStrings(element) {
        if (FastTypeCheck.isArray(element) && element.length > 0) {
            for (let i = 0, l = element.length; i < l; i += 1) {
                if (!FastTypeCheck.isString(element[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    static isArrayOfNumbers(element) {
        if (FastTypeCheck.isArray(element) && element.length > 0) {
            for (let i = 0, l = element.length; i < l; i += 1) {
                if (!FastTypeCheck.isNumber(element[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    static isArrayOfMongoObjects(element) {
        if (FastTypeCheck.isArray(element) && element.length > 0) {
            for (let i = 0, l = element.length; i < l; i += 1) {
                if (!FastTypeCheck.isMongoObject(element[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    static ensureNumber(input) {
        if (FastTypeCheck.isNumber(input)) {
            return input;
        }
        if (FastTypeCheck.isArray(input)) {
            return 0;
        }
        if (FastTypeCheck.isBoolean(input) && !!input) {
            return 1;
        }
        let number = input;
        if (FastTypeCheck.isString(input)) {
            number = number.replace(/,/g, '.');
            number = number.replace(/\s+/g, '');
        }
        number = parseFloat(number);
        if (FastTypeCheck.isNumber(number)) {
            return number;
        }
        const integer = parseInt(input, 10);
        if (FastTypeCheck.isNumber(integer)) {
            return integer;
        }
        return 0;
    }

    static ensureString(input) {
        if (FastTypeCheck.isString(input)) {
            return input;
        }
        if (FastTypeCheck.isArray(input) || FastTypeCheck.isNumber(input) || FastTypeCheck.isDate(input) ||
            FastTypeCheck.isBoolean(input)) {
            return String(input);
        }
        return '';
    }

    static ensureArray(input) {
        if (FastTypeCheck.isArray(input)) {
            return input;
        }
        if (FastTypeCheck.isString(input) || FastTypeCheck.isNumber(input) || FastTypeCheck.isDate(input) ||
            FastTypeCheck.isBoolean(input) || FastTypeCheck.isNull(input)) {
            return [input];
        }
        return [];
    }

    static ensureObject(input) {
        if (FastTypeCheck.isObject(input)) {
            return input;
        }
        if (FastTypeCheck.isString(input) && input !== '') {
            const key = String(input);
            const obj = {};
            obj[key] = input;
            return obj;
        }
        if (FastTypeCheck.isNumber(input) && input !== 0) {
            const key = String(input);
            const obj = {};
            obj[key] = input;
            return obj;
        }
        return {};
    }
}

module.exports = FastTypeCheck;
