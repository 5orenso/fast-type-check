
const tc = require('../../lib/fastTypeCheck');

describe('fastTypeCheckLib', () => {
    describe('Method tests', () => {
        describe('getType', () => {
            test('should return correct type', () => {
                expect(tc.getType({})).toEqual('[object Object]');
            });
        });

        describe('isArray', () => {
            test('should return true if is an array', () => {
                expect(tc.isArray([])).toBe(true);
            });
            test('should return false if is an object', () => {
                expect(tc.isArray({})).toBe(false);
            });
            test('should return false if is a number', () => {
                expect(tc.isArray(1)).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isArray('foo')).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isArray(null)).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isArray(undefined)).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isArray(() => {})).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isArray(new Date())).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isArray(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isArray(true)).toBe(false);
            });
        });

        describe('isObject', () => {
            test('should return true if is an object', () => {
                expect(tc.isObject({})).toBe(true);
            });
            test('should return false if is an array', () => {
                expect(tc.isObject([])).toBe(false);
            });
            test('should return false if is a number', () => {
                expect(tc.isObject(1)).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isObject('foo')).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isObject(null)).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isObject(undefined)).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isObject(() => {})).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isObject(new Date())).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isObject(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isObject(true)).toBe(false);
            });
        });

        describe('isString', () => {
            test('should return true if is a string', () => {
                expect(tc.isString('foo')).toBe(true);
            });
            test('should return false if is an object', () => {
                expect(tc.isString({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isString([])).toBe(false);
            });
            test('should return false if is a number', () => {
                expect(tc.isString(1)).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isString(null)).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isString(undefined)).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isString(() => {})).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isString(new Date())).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isString(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isString(true)).toBe(false);
            });
        });

        describe('isDate', () => {
            test('should return true if is date', () => {
                expect(tc.isDate(new Date())).toBe(true);
            });
            test('should return false if is a string', () => {
                expect(tc.isDate('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isDate({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isDate([])).toBe(false);
            });
            test('should return false if is a number', () => {
                expect(tc.isDate(1)).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isDate(null)).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isDate(undefined)).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isDate(() => {})).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isDate(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isDate(true)).toBe(false);
            });
        });

        describe('isNumber', () => {
            test('should return true if is a number', () => {
                expect(tc.isNumber(1)).toBe(true);
            });
            test('should return false if is date', () => {
                expect(tc.isNumber(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isNumber('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isNumber({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isNumber([])).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isNumber(null)).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isNumber(undefined)).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isNumber(() => {})).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isNumber(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isNumber(true)).toBe(false);
            });
        });

        describe('isFunction', () => {
            test('should return true if is function', () => {
                expect(tc.isFunction(() => {})).toBe(true);
            });
            test('should return true if is a number', () => {
                expect(tc.isFunction(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isFunction(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isFunction('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isFunction({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isFunction([])).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isFunction(null)).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isFunction(undefined)).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isFunction(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isFunction(true)).toBe(false);
            });
        });

        describe('isRegexp', () => {
            test('should return true if is regexp', () => {
                expect(tc.isRegexp(new RegExp('foobar'))).toBe(true);
            });
            test('should return false if is function', () => {
                expect(tc.isRegexp(() => {})).toBe(false);
            });
            test('should return true if is a number', () => {
                expect(tc.isRegexp(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isRegexp(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isRegexp('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isRegexp({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isRegexp([])).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isRegexp(null)).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isRegexp(undefined)).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isRegexp(true)).toBe(false);
            });
        });

        describe('isBoolean', () => {
            test('should return true if is boolean', () => {
                expect(tc.isBoolean(true)).toBe(true);
            });
            test('should return false if is regexp', () => {
                expect(tc.isBoolean(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isBoolean(() => {})).toBe(false);
            });
            test('should return true if is a number', () => {
                expect(tc.isBoolean(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isBoolean(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isBoolean('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isBoolean({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isBoolean([])).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isBoolean(null)).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isBoolean(undefined)).toBe(false);
            });
        });

        describe('isNull', () => {
            test('should return true if is null', () => {
                expect(tc.isNull(null)).toBe(true);
            });
            test('should return false if is boolean', () => {
                expect(tc.isNull(true)).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isNull(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isNull(() => {})).toBe(false);
            });
            test('should return true if is a number', () => {
                expect(tc.isNull(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isNull(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isNull('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isNull({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isNull([])).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isNull(undefined)).toBe(false);
            });
        });

        describe('isUndefined', () => {
            test('should return true if is undefined', () => {
                expect(tc.isUndefined(undefined)).toBe(true);
            });
            test('should return false if is null', () => {
                expect(tc.isUndefined(null)).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isUndefined(true)).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isUndefined(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isUndefined(() => {})).toBe(false);
            });
            test('should return true if is a number', () => {
                expect(tc.isUndefined(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isUndefined(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isUndefined('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isUndefined({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isUndefined([])).toBe(false);
            });
        });

        describe('isMongoObject', () => {
            test('should return true if is a mongo object', () => {
                expect(tc.isMongoObject({ _id: '1234qwertyuiop' })).toBe(true);
            });
            test('should return false if is array of numbers and strings', () => {
                expect(tc.isArrayOfMongoObjects([1, 'foo'])).toBe(false);
            });
            test('should return false if is array of numbers and arrays', () => {
                expect(tc.isArrayOfMongoObjects([1, []])).toBe(false);
            });
            test('should return false if is array of objects and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([{}, { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is array of arrays and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([[], { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isMongoObject(undefined)).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isMongoObject(null)).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isMongoObject(true)).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isMongoObject(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isMongoObject(() => {})).toBe(false);
            });
            test('should return true if is a number', () => {
                expect(tc.isMongoObject(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isMongoObject(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isMongoObject('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isMongoObject({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isMongoObject([])).toBe(false);
            });
        });

        describe('isArrayOfArrays', () => {
            test('should return false if is array of arrays', () => {
                expect(tc.isArrayOfArrays([[1, 2], [3, 4], [5, 6]])).toBe(true);
            });
            test('should return false if is a mongo object', () => {
                expect(tc.isArrayOfArrays({ _id: '1234qwertyuiop' })).toBe(false);
            });
            test('should return false if is array of numbers and strings', () => {
                expect(tc.isArrayOfMongoObjects([1, 'foo'])).toBe(false);
            });
            test('should return false if is array of numbers and arrays', () => {
                expect(tc.isArrayOfMongoObjects([1, []])).toBe(false);
            });
            test('should return false if is array of objects and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([{}, { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is array of arrays and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([[], { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isArrayOfArrays(undefined)).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isArrayOfArrays(null)).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isArrayOfArrays(true)).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isArrayOfArrays(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isArrayOfArrays(() => {})).toBe(false);
            });
            test('should return true if is a number', () => {
                expect(tc.isArrayOfArrays(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isArrayOfArrays(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isArrayOfArrays('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isArrayOfArrays({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isArrayOfArrays([])).toBe(false);
            });
        });

        describe('isArrayOfStrings', () => {
            test('should return true if is array of strings', () => {
                expect(tc.isArrayOfStrings(['foo', 'bar', 'gomle'])).toBe(true);
            });
            test('should return false if is array of arrays', () => {
                expect(tc.isArrayOfStrings([[1, 2], [3, 4], [5, 6]])).toBe(false);
            });
            test('should return false if is a mongo object', () => {
                expect(tc.isArrayOfStrings({ _id: '1234qwertyuiop' })).toBe(false);
            });
            test('should return false if is array of numbers and strings', () => {
                expect(tc.isArrayOfMongoObjects([1, 'foo'])).toBe(false);
            });
            test('should return false if is array of numbers and arrays', () => {
                expect(tc.isArrayOfMongoObjects([1, []])).toBe(false);
            });
            test('should return false if is array of objects and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([{}, { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is array of arrays and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([[], { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isArrayOfStrings(undefined)).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isArrayOfStrings(null)).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isArrayOfStrings(true)).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isArrayOfStrings(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isArrayOfStrings(() => {})).toBe(false);
            });
            test('should return true if is a number', () => {
                expect(tc.isArrayOfStrings(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isArrayOfStrings(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isArrayOfStrings('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isArrayOfStrings({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isArrayOfStrings([])).toBe(false);
            });
        });

        describe('isArrayOfNumbers', () => {
            test('should return true if is array of numbers', () => {
                expect(tc.isArrayOfNumbers([1, 2, 3, 4])).toBe(true);
            });
            test('should return false if is array of strings', () => {
                expect(tc.isArrayOfNumbers(['foo', 'bar', 'gomle'])).toBe(false);
            });
            test('should return false if is array of arrays', () => {
                expect(tc.isArrayOfNumbers([[1, 2], [3, 4], [5, 6]])).toBe(false);
            });
            test('should return false if is a mongo object', () => {
                expect(tc.isArrayOfNumbers({ _id: '1234qwertyuiop' })).toBe(false);
            });
            test('should return false if is array of numbers and strings', () => {
                expect(tc.isArrayOfMongoObjects([1, 'foo'])).toBe(false);
            });
            test('should return false if is array of numbers and arrays', () => {
                expect(tc.isArrayOfMongoObjects([1, []])).toBe(false);
            });
            test('should return false if is array of objects and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([{}, { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is array of arrays and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([[], { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isArrayOfNumbers(undefined)).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isArrayOfNumbers(null)).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isArrayOfNumbers(true)).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isArrayOfNumbers(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isArrayOfNumbers(() => {})).toBe(false);
            });
            test('should return true if is a number', () => {
                expect(tc.isArrayOfNumbers(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isArrayOfNumbers(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isArrayOfNumbers('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isArrayOfNumbers({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isArrayOfNumbers([])).toBe(false);
            });
        });

        describe('isArrayOfMongoObjects', () => {
            test('should return true if is array of mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([{ _id: '123foo' }, { _id: '456bar' }])).toBe(true);
            });
            test('should return false if is array of numbers', () => {
                expect(tc.isArrayOfMongoObjects([1, 2, 3, 4])).toBe(false);
            });
            test('should return false if is array of strings', () => {
                expect(tc.isArrayOfMongoObjects(['foo', 'bar', 'gomle'])).toBe(false);
            });
            test('should return false if is array of arrays', () => {
                expect(tc.isArrayOfMongoObjects([[1, 2], [3, 4], [5, 6]])).toBe(false);
            });
            test('should return false if is array of numbers and strings', () => {
                expect(tc.isArrayOfMongoObjects([1, 'foo'])).toBe(false);
            });
            test('should return false if is array of numbers and arrays', () => {
                expect(tc.isArrayOfMongoObjects([1, []])).toBe(false);
            });
            test('should return false if is array of objects and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([{}, { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is array of arrays and mongo objects', () => {
                expect(tc.isArrayOfMongoObjects([[], { _id: '123foo' }])).toBe(false);
            });
            test('should return false if is a mongo object', () => {
                expect(tc.isArrayOfMongoObjects({ _id: '1234qwertyuiop' })).toBe(false);
            });
            test('should return false if is undefined', () => {
                expect(tc.isArrayOfMongoObjects(undefined)).toBe(false);
            });
            test('should return false if is null', () => {
                expect(tc.isArrayOfMongoObjects(null)).toBe(false);
            });
            test('should return false if is boolean', () => {
                expect(tc.isArrayOfMongoObjects(true)).toBe(false);
            });
            test('should return false if is regexp', () => {
                expect(tc.isArrayOfMongoObjects(new RegExp('foobar'))).toBe(false);
            });
            test('should return false if is function', () => {
                expect(tc.isArrayOfMongoObjects(() => {})).toBe(false);
            });
            test('should return true if is a number', () => {
                expect(tc.isArrayOfMongoObjects(1)).toBe(false);
            });
            test('should return false if is date', () => {
                expect(tc.isArrayOfMongoObjects(new Date())).toBe(false);
            });
            test('should return false if is a string', () => {
                expect(tc.isArrayOfMongoObjects('foo')).toBe(false);
            });
            test('should return false if is an object', () => {
                expect(tc.isArrayOfMongoObjects({})).toBe(false);
            });
            test('should return false if is an array', () => {
                expect(tc.isArrayOfMongoObjects([])).toBe(false);
            });
        });

        describe('ensureNumber', () => {
            test('should return number no matter input', () => {
                expect(tc.ensureNumber(1)).toEqual(1);
                expect(tc.ensureNumber('1')).toEqual(1);
                expect(tc.ensureNumber(' 1')).toEqual(1);
                expect(tc.ensureNumber('1 ')).toEqual(1);
                expect(tc.ensureNumber(' 1 ')).toEqual(1);
                expect(tc.ensureNumber('')).toEqual(0);
                expect(tc.ensureNumber([])).toEqual(0);
                expect(tc.ensureNumber([1, 2])).toEqual(0);
                expect(tc.ensureNumber({})).toEqual(0);
                expect(tc.ensureNumber(true)).toEqual(1);
                expect(tc.ensureNumber(false)).toEqual(0);
                expect(tc.ensureNumber(null)).toEqual(0);
                expect(tc.ensureNumber(undefined)).toEqual(0);
                expect(tc.ensureNumber(new Date())).toEqual(0);
                expect(tc.ensureNumber(new RegExp('foo'))).toEqual(0);
            });
        });

        describe('ensureString', () => {
            test('should return string no matter input', () => {
                expect(tc.ensureString(1)).toEqual('1');
                expect(tc.ensureString('1')).toEqual('1');
                expect(tc.ensureString(' 1')).toEqual(' 1');
                expect(tc.ensureString('1 ')).toEqual('1 ');
                expect(tc.ensureString(' 1 ')).toEqual(' 1 ');
                expect(tc.ensureString('')).toEqual('');
                expect(tc.ensureString([])).toEqual('');
                expect(tc.ensureString([1, 2])).toEqual('1,2');
                expect(tc.ensureString({})).toEqual('');
                expect(tc.ensureString(true)).toEqual('true');
                expect(tc.ensureString(null)).toEqual('');
                expect(tc.ensureString(undefined)).toEqual('');
                expect(tc.ensureString(new Date())).toMatch(/^[a-z]{3} [a-z]{3} [0-9]{2} [0-9]{4}/i);
                expect(tc.ensureString(new RegExp('foo'))).toEqual('');
            });
        });

        describe('ensureArray', () => {
            test('should return array no matter input', () => {
                expect(tc.ensureArray(1)).toEqual([1]);
                expect(tc.ensureArray('1')).toEqual(['1']);
                expect(tc.ensureArray(' 1')).toEqual([' 1']);
                expect(tc.ensureArray('1 ')).toEqual(['1 ']);
                expect(tc.ensureArray(' 1 ')).toEqual([' 1 ']);
                expect(tc.ensureArray('')).toEqual(['']);
                expect(tc.ensureArray([])).toEqual([]);
                expect(tc.ensureArray([1, 2])).toEqual([1, 2]);
                expect(tc.ensureArray({})).toEqual([]);
                expect(tc.ensureArray(true)).toEqual([true]);
                expect(tc.ensureArray(null)).toEqual([null]);
                expect(tc.ensureArray(undefined)).toEqual([]);
                const date = new Date();
                expect(tc.ensureArray(date)).toEqual([date]);
                expect(tc.ensureArray(new RegExp('foo'))).toEqual([]);
            });
        });

        describe('ensureObject', () => {
            test('should return array no matter input', () => {
                expect(tc.ensureObject(1)).toEqual({ 1: 1 });
                expect(tc.ensureObject('1')).toEqual({ 1: '1' });
                expect(tc.ensureObject(' 1')).toEqual({ ' 1': ' 1' });
                expect(tc.ensureObject('1 ')).toEqual({ '1 ': '1 ' });
                expect(tc.ensureObject(' 1 ')).toEqual({ ' 1 ': ' 1 ' });
                expect(tc.ensureObject('')).toEqual({});
                expect(tc.ensureObject({})).toEqual({});
                expect(tc.ensureObject([1, 2])).toEqual({});
                expect(tc.ensureObject({ foo: 'bar', gomle: 'foobar' })).toEqual({ foo: 'bar', gomle: 'foobar' });
                expect(tc.ensureObject(true)).toEqual({});
                expect(tc.ensureObject(null)).toEqual({});
                expect(tc.ensureObject(undefined)).toEqual({});
                const date = new Date();
                expect(tc.ensureObject(date)).toEqual({});
                expect(tc.ensureObject(new RegExp('foo'))).toEqual({});
            });
        });
    });
});
