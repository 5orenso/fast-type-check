/**
 * https://github.com/5orenso
 *
 * Copyright (c) 2019 Øistein Sørensen
 * Licensed under the MIT license.
 */

'use strict';

const assert = require('assert');

/**
 *
 * @class FastTypeCheck
 */
class FastTypeCheck {
    /**
     * Get the real type of this element.
     *
     * @static
     * @param    {*} element
     * @returns  {string} Prototype type as a string.
     * @memberof FastTypeCheck
     */
    static getType(element) {
        return Object.prototype.toString.call(element);
    }

    /**
     * Check if this is an array or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isArray(element) {
        if (FastTypeCheck.getType(element) === '[object Array]') {
            return true;
        }
        return false;
    }

    /**
     * Check if this is an object or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isObject(element) {
        if (FastTypeCheck.getType(element) === '[object Object]') {
            return true;
        }
        return false;
    }

    /**
     * Check if this is an empty object or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isEmptyObject(element) {
        if (FastTypeCheck.isObject(element)) {
            const keys = Object.keys(element);
            if (keys.length === 0) {
                return true;
            }
        }
        return false;
    }

    /**
     * Check if this is a string or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isString(element) {
        if (FastTypeCheck.getType(element) === '[object String]') {
            return true;
        }
        return false;
    }

    /**
     * Check if this is a date or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isDate(element) {
        if (FastTypeCheck.getType(element) === '[object Date]') {
            return true;
        }
        return false;
    }

    /**
     * Check if this is a number or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isNumber(element) {
        if (FastTypeCheck.getType(element) === '[object Number]' && !Number.isNaN(element)) {
            return true;
        }
        return false;
    }

    /**
     * Check if this is a function or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isFunction(element) {
        if (FastTypeCheck.getType(element) === '[object Function]') {
            return true;
        }
        return false;
    }

    /**
     * Check if this is a regular expression or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isRegexp(element) {
        if (FastTypeCheck.getType(element) === '[object RegExp]') {
            return true;
        }
        return false;
    }

    /**
     * Check if this is a boolean or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isBoolean(element) {
        if (FastTypeCheck.getType(element) === '[object Boolean]') {
            return true;
        }
        return false;
    }

    /**
     * Check if this is null or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isNull(element) {
        if (FastTypeCheck.getType(element) === '[object Null]') {
            return true;
        }
        return false;
    }

    /**
     * Check if this is undefined or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isUndefined(element) {
        if (FastTypeCheck.getType(element) === '[object Undefined]') {
            return true;
        }
        return false;
    }

    /**
     * Check if this a MongoDB object or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isMongoObject(element) {
        if (FastTypeCheck.getType(element) === '[object Object]') {
            // eslint-disable-next-line
            if (element.hasOwnProperty('_id') && element._id.match(/[a-z0-9]+/i)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Check if this a string or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
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

    /**
     * Check if this is an array of objects or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
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

    /**
     * Check if this is an array of strings or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
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

    /**
     * Check if this is an array of numbers or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
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

    /**
     * Check if this is an array of MongoDB objects or not.
     *
     * @static
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
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

    /**
     * isEqual uses Object.is() and determines whether two values are the same value.
     * Two values are the same if one of the following holds:
     *
     *    - both undefined
     *    - both null
     *    - both true or both false
     *    - both strings of the same length with the same characters in the same order
     *    - both the same object (means both object have same reference)
     *    - both numbers and
     *        - both +0
     *        - both -0
     *        - both NaN
     *        - or both non-zero and both not NaN and both have the same value
     *
     * This is not the same as being equal according to the == operator.
     * The == operator applies various coercions to both sides (if they are not the same Type)
     * before testing for equality (resulting in such behavior as "" == false being true),
     * but Object.is doesn't coerce either value.
     *
     * This is also not the same as being equal according to the === operator. The === operator
     * (and the == operator as well) treats the number values -0 and +0 as equal and treats
     * Number.NaN as not equal to NaN.
     *
     * @example
     * Object.is('foo', 'foo');     // true
     * Object.is(window, window);   // true
     *
     * Object.is('foo', 'bar');     // false
     * Object.is([], []);           // false
     *
     * var foo = { a: 1 };
     * var bar = { a: 1 };
     * Object.is(foo, foo);         // true
     * Object.is(foo, bar);         // false
     *
     * Object.is(null, null);       // true
     *
     * // Special Cases
     * Object.is(0, -0);            // false
     * Object.is(-0, -0);           // true
     * Object.is(NaN, 0/0);         // true
     *
     * @static
     * @param    {*} element
     * @param    {*} element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isEqual(a, b) {
        return Object.is(a, b);
        // return a === b && (a !== 0 || 1 / a === 1 / b) // false for +0 vs -0
        //     || a !== a && b !== b; // true for NaN vs NaN
    }

    /**
     * Check if these arrays are equal. Checking every value with isEqual.
     *
     * @static
     * @param    {array}   array1
     * @param    {array}   array2
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isEqualArrays(array1, array2) {
        if (array1.length === array2.length && array1.every((el, i) => FastTypeCheck.isEqual(el, array2[i]))) {
            return true;
        }
        return false;
    }

    /**
     * Check if these objects are equal. Doing a deep equal.
     *
     * @static
     * @param    {object}   object1
     * @param    {object}   object2
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isEqualObjects(object1, object2) {
        try {
            assert.deepEqual(object1, object2);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Check if element is part of array.
     * Can be used on:
     *     - Array of objects
     *     - Array of arrays
     *     - Array of simple values.
     *
     * @static
     * @param    {array}   array
     * @param    {*}       element
     * @returns  {boolean}
     * @memberof FastTypeCheck
     */
    static isInArray(finalArray, objectElement) {
        let idx;
        if (FastTypeCheck.isObject(objectElement)) {
            // Array of objects
            idx = finalArray.findIndex(el => FastTypeCheck.isEqualObjects(el, objectElement));
        } else if (FastTypeCheck.isArray(objectElement)) {
            // Array of arrays
            idx = finalArray.findIndex(el => FastTypeCheck.isEqualArrays(el, objectElement));
        } else if (FastTypeCheck.isNumber(objectElement) || FastTypeCheck.isString(objectElement)
            || FastTypeCheck.isBoolean(objectElement)) {
            // Array of simple values.
            idx = finalArray.findIndex(el => FastTypeCheck.isEqual(el, objectElement));
        }
        if (idx >= 0) {
            return true;
        }
        return false;
    }

    /**
     * Ensure that input is a number.
     * If input is:
     *     - a number. Returns this number.
     *     - an array. Returns 0.
     *     - a boolean and true. Returns 0.
     *     - a string. Trying to parse number. Returns the value if successful.
     * If none of above is successful. Returns 0.
     *
     * @static
     * @param    {*} input
     * @returns  {number}
     * @memberof FastTypeCheck
     */
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

    /**
     * Ensure that input is a string.
     * If input is:
     *     - a string. Returns string.
     *     - an array, a number, a date or a boolean. Returns element casted to string.
     * If none of above is successful. Returns ''.
     *
     * @static
     * @param    {*} input
     * @returns  {string}
     * @memberof FastTypeCheck
     */
    static ensureString(input) {
        if (FastTypeCheck.isString(input)) {
            return input;
        }
        if (FastTypeCheck.isArray(input) || FastTypeCheck.isNumber(input) || FastTypeCheck.isDate(input)
            || FastTypeCheck.isBoolean(input)) {
            return String(input);
        }
        return '';
    }

    /**
     * Ensure that input is an array.
     * If input is:
     *     - an array. Returns array.
     *     - a string, a number, a date, a boolean or null. Returns an array with input as the element.
     * If none of above is successful. Returns [].
     *
     * @static
     * @param    {*} input
     * @returns  {array}
     * @memberof FastTypeCheck
     */
    static ensureArray(input) {
        if (FastTypeCheck.isArray(input)) {
            return input;
        }
        if (FastTypeCheck.isString(input) || FastTypeCheck.isNumber(input) || FastTypeCheck.isDate(input)
            || FastTypeCheck.isBoolean(input) || FastTypeCheck.isNull(input)) {
            return [input];
        }
        return [];
    }

    /**
     * Ensure that input is an object.
     * If input is:
     *     - an object. Returns object.
     *     - a non empty string. Returns an object `{ input: input }`.
     *     - a number !== 0. Returns an object `{ input: input }`.
     * If none of above is successful. Returns {}.
     *
     * @static
     * @param    {*} input
     * @returns  {object}
     * @memberof FastTypeCheck
     */
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

    /**
     * Ensure that input array has uniq values.
     * Removes duplicate values from array.
     *
     * @static
     * @param    {array} input
     * @returns  {array}
     * @memberof FastTypeCheck
     */
    static ensureUniqArray(input) {
        if (Array.isArray(input)) {
            const finalArray = [];
            for (let i = 0, l = input.length; i < l; i += 1) {
                const el = input[i];
                if (!FastTypeCheck.isInArray(finalArray, el, i)) {
                    finalArray.push(el);
                }
            }
            return finalArray;
        }
        return input;
    }

    /**
     * Ensure that input is a date.
     * If input is:
     *     - a date: Returns date.
     *     - a string: Trying to parse date and returns date if successful.
     *     - a number: Trying to figure out if this is an epoch. If successful, returns date.
     * If none of above is successful. Returns `null`.
     *
     * @static
     * @param    {array} input
     * @returns  {array}
     * @memberof FastTypeCheck
     */
    static ensureDate(input) {
        if (FastTypeCheck.isDate(input)) {
            return input;
        }
        if (FastTypeCheck.isString(input)) {
            return new Date(input);
        }
        if (FastTypeCheck.isNumber(input)) {
            if (input < 9999999999) {
                input *= 1000;
            }
            return new Date(input);
        }
        return null;
    }

    /**
     * @see ensureNumber
     */
    static asNumber(input) {
        return FastTypeCheck.ensureNumber(input);
    }

    /**
     * @see ensureString
     */
    static asString(input) {
        return FastTypeCheck.ensureString(input);
    }

    /**
     * @see ensureArray
     */
    static asArray(input) {
        return FastTypeCheck.ensureArray(input);
    }

    /**
     * @see ensureObject
     */
    static asObject(input) {
        return FastTypeCheck.ensureObject(input);
    }

    /**
     * @see ensureUniqArray
     */
    static asUniqArray(input) {
        return FastTypeCheck.ensureUniqArray(input);
    }

    /**
     * @see ensureDate
     */
    static asDate(input) {
        return FastTypeCheck.ensureDate(input);
    }

    /**
     * Get object deep value if it exists.
     *
     * @static
     * @param    {object} Main object.
     * @param    {string} Name of key on level 1.
     * @param    {string} Name of key on level 2.
     * @param    {string} Name of key on level n.
     * @returns  {*} object value
     * @memberof FastTypeCheck
     * @example
     * // Let's say you have object:
     * conat obj = {
     *     foo: {
     *         bar: 1
     *     }
     * };
     * // 1. You want to get the value obj.foo.bar if it exists:
     * parseObject(obj, 'foo', 'bar');
     * // -> returns 1
     * // 2. You want to get the value obj.foo.bar.gomle if it exists:
     * parseObject(obj, 'foo', 'bar', 'gomle');
     * // -> returns null
     */
    static parseObject($obj, ...$args) {
        let args = $args;
        if (Array.isArray(args[0])) {
            args = args[0];
        }
        // let args = Array.prototype.slice.call(arguments, 1);
        let obj = $obj;
        for (let i = 0; i < args.length; i += 1) {
            if (!obj || !obj.hasOwnProperty(args[i])) {
                return null;
            }
            obj = obj[args[i]];
        }
        if (typeof obj === 'object') {
            return obj;
        }
        return null;
    }

    /**
     * Check if object has deep value.
     *
     * @param    {object} Main object.
     * @param    {string} Name of key on level 1.
     * @param    {string} Name Name of key on level 2.
     * @param    {string} Name Name of key on level n.
     * @returns  {true|false}
     * @memberof FastTypeCheck
     * @example
     * // Let's say you have object:
     * conat obj = {
     *     foo: {
     *         bar: 1
     *     }
     * };
     * // 1. You want to get the value obj.foo.bar if it exists:
     * checkNested(obj, 'foo', 'bar');
     * // -> returns true
     * // 2. You want to get the value obj.foo.bar.gomle if it exists:
     * checkNested(obj, 'foo', 'bar', 'gomle');
     * // -> returns false
     */
    static checkNested($obj, ...args) {
        let obj = $obj;
        for (let i = 0; i < args.length; i += 1) {
            if (!obj || !obj.hasOwnProperty(args[i])) {
                return false;
            }
            obj = obj[args[i]];
        }
        return true;
    }

    /**
     * Get object deep value if it exists.
     *
     * @static
     * @param    {object} Main object.
     * @param    {string} Path to value.
     * @returns  {*} object value
     * @memberof FastTypeCheck
     * @example
     * // Let's say you have object:
     * conat obj = {
     *     foo: {
     *         bar: 1
     *     }
     * };
     * // 1. You want to get the value obj.foo.bar if it exists:
     * getNestedValue(obj, 'foo.bar');
     * // -> returns 1
     * // 2. You want to get the value obj.foo.bar.gomle if it exists:
     * getNestedValue(obj, 'foo.bar.gomle');
     * // -> returns null
     */
    static getNestedValue(obj, path) {
        let el = obj;
        path.split('.').forEach((part) => {
            if (typeof el[part] === 'undefined') {
                el = null;
            }
            if (el) {
                el = el[part];
            }
        });
        return el;
    }

    /**
     * Set object deep value.
     *
     * @static
     * @param    {object} Main object.
     * @param    {string} Path to value.
     * @param    {*} Value to set.
     * @returns  {object} Object with new value.
     * @memberof FastTypeCheck
     * @todo     Add example.
     */
    static setNestedValue(obj, is, value) {
        if (typeof is === 'string') {
            return FastTypeCheck.setNestedValue(obj, is.split('.'), value);
        }
        if (is.length === 1 && value !== undefined) {
            // eslint-disable-next-line
            return obj[is[0]] = value;
        }
        if (is.length === 0) {
            return obj;
        }
        return FastTypeCheck.setNestedValue(obj[is[0]], is.slice(1), value);
    }

    /**
     * Remove empty key, values from an object.
     *
     * @static
     * @param    {object} Object to be cleaned.
     * @returns  {object} Cleand object.
     * @memberof FastTypeCheck
     * @todo     Add example.
     */
    static cleanObject($obj) {
        const obj = Object.assign({}, $obj);
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i += 1) {
            const idx = keys[i];
            if (obj.hasOwnProperty(idx)) {
                if (typeof obj[idx] === 'undefined'
                    || obj[idx] === false
                    || obj[idx] === null
                    || Number.isNaN(obj[idx])
                    || FastTypeCheck.isEmptyObject(obj[idx])
                ) {
                    delete obj[idx];
                }
            }
        }
        return obj;
    }
}

module.exports = FastTypeCheck;
