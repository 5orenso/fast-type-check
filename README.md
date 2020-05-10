# Fast-type-check to the rescue

[![Build Status](https://travis-ci.org/5orenso/fast-type-check.svg?branch=master)](https://travis-ci.org/5orenso/fast-type-check)
[![Coverage Status](https://coveralls.io/repos/github/5orenso/fast-type-check/badge.svg?branch=master)](https://coveralls.io/github/5orenso/fast-type-check?branch=master)
[![GitHub version](https://badge.fury.io/gh/5orenso%2Ffast-type-check.svg)](https://badge.fury.io/gh/5orenso%2Ffast-type-check)
[![npm version](https://badge.fury.io/js/fast-type-check.svg)](https://badge.fury.io/js/fast-type-check)

A nice, small and fast library for checking data types. Javascript is always a pain with type checking and I often end
up typing `if (typeof myvar === 'string')` too many times.

No external dependencies.


### Howto to get started

Install the module:
```bash
$ npm i fast-type-check --save
```

### Howto use the module

Include it at the top of your script:
```javascript
const tc = require('fast-type-check');
```

Test if value is a number:
```javascript
if (tc.isNumber(123)) {
    console.log('this is a number.');
}

if (tc.isNumber('123')) {
    console.log('this is not a number.');
}
```

Test if value is an array of objects:

```javascript
const obj = [{}, {}];
if (tc.isArrayOfObjects(obj)) {
    console.log('This is an array of objects.')
    // This is an array of objects.
}
```

Make uniq array:

```javascript
const arr = [[1, 2], [1, 2], [3, 4, 5], [1, 2]];
console.log(tc.ensureUniqArray(arr));
// [[1, 2], [3, 4, 5]]
```

Works with arrays of objects too:

```javascript
const arr = [{ foo: 1, bar: 2 }, { gomle: 3, foobar: 4 }, { foo: 1, bar: 2 }, { foo: 1, bar: 2 }];
console.log(tc.ensureUniqArray(arr));
// [{ foo: 1, bar: 2 }, { gomle: 3, foobar: 4 }]
```


## Testing methods for datatypes

Check if variable is a specific type.

See [tests for usage details](__tests__/lib/fastTypeCheck.js)

All methods returns `true` or `false`.

- isArray
- isObject
- isEmptyObject
- isString
- isDate
- isNumber
- isFunction
- isRegexp
- isBoolean
- isNull
- isUndefined
- isMongoObject
- isArrayOfObjects
- isArrayOfArrays
- isArrayOfStrings
- isArrayOfNumbers
- isArrayOfMongoObjects
- isEqual
- isEqualArrays
- isEqualObjects
- isInArray


## Enforcing methods for datatypes

Always try to return the required datatype.

See [tests for usage details](__tests__/lib/fastTypeCheck.js)

- ensureNumber alias asNumber
- ensureString alias asString
- ensureArray alias asArray
- ensureObject alias asObject
- ensureUniqArray alias asUniqArray
- ensureDate alias asDate


## Other useful methods

- parseObject
- cleanObject


# API Reference

<a name="FastTypeCheck"></a>

## FastTypeCheck
**Kind**: global class  

* [FastTypeCheck](#FastTypeCheck)
    * [.getType(element)](#FastTypeCheck.getType) ⇒ <code>string</code>
    * [.isArray(element)](#FastTypeCheck.isArray) ⇒ <code>boolean</code>
    * [.isObject(element)](#FastTypeCheck.isObject) ⇒ <code>boolean</code>
    * [.isEmptyObject(element)](#FastTypeCheck.isEmptyObject) ⇒ <code>boolean</code>
    * [.isString(element)](#FastTypeCheck.isString) ⇒ <code>boolean</code>
    * [.isDate(element)](#FastTypeCheck.isDate) ⇒ <code>boolean</code>
    * [.isNumber(element)](#FastTypeCheck.isNumber) ⇒ <code>boolean</code>
    * [.isFunction(element)](#FastTypeCheck.isFunction) ⇒ <code>boolean</code>
    * [.isRegexp(element)](#FastTypeCheck.isRegexp) ⇒ <code>boolean</code>
    * [.isBoolean(element)](#FastTypeCheck.isBoolean) ⇒ <code>boolean</code>
    * [.isNull(element)](#FastTypeCheck.isNull) ⇒ <code>boolean</code>
    * [.isUndefined(element)](#FastTypeCheck.isUndefined) ⇒ <code>boolean</code>
    * [.isMongoObject(element)](#FastTypeCheck.isMongoObject) ⇒ <code>boolean</code>
    * [.isArrayOfObjects(element)](#FastTypeCheck.isArrayOfObjects) ⇒ <code>boolean</code>
    * [.isArrayOfArrays(element)](#FastTypeCheck.isArrayOfArrays) ⇒ <code>boolean</code>
    * [.isArrayOfStrings(element)](#FastTypeCheck.isArrayOfStrings) ⇒ <code>boolean</code>
    * [.isArrayOfNumbers(element)](#FastTypeCheck.isArrayOfNumbers) ⇒ <code>boolean</code>
    * [.isArrayOfMongoObjects(element)](#FastTypeCheck.isArrayOfMongoObjects) ⇒ <code>boolean</code>
    * [.isEqual(element, element)](#FastTypeCheck.isEqual) ⇒ <code>boolean</code>
    * [.isEqualArrays(array1, array2)](#FastTypeCheck.isEqualArrays) ⇒ <code>boolean</code>
    * [.isEqualObjects(object1, object2)](#FastTypeCheck.isEqualObjects) ⇒ <code>boolean</code>
    * [.isInArray(array, element)](#FastTypeCheck.isInArray) ⇒ <code>boolean</code>
    * [.ensureNumber(input)](#FastTypeCheck.ensureNumber) ⇒ <code>number</code>
    * [.ensureString(input)](#FastTypeCheck.ensureString) ⇒ <code>string</code>
    * [.ensureArray(input)](#FastTypeCheck.ensureArray) ⇒ <code>array</code>
    * [.ensureObject(input)](#FastTypeCheck.ensureObject) ⇒ <code>object</code>
    * [.ensureUniqArray(input)](#FastTypeCheck.ensureUniqArray) ⇒ <code>array</code>
    * [.ensureDate(input)](#FastTypeCheck.ensureDate) ⇒ <code>array</code>
    * [.asNumber()](#FastTypeCheck.asNumber)
    * [.asString()](#FastTypeCheck.asString)
    * [.asArray()](#FastTypeCheck.asArray)
    * [.asObject()](#FastTypeCheck.asObject)
    * [.asUniqArray()](#FastTypeCheck.asUniqArray)
    * [.asDate()](#FastTypeCheck.asDate)
    * [.parseObject(Main, Name, Name, Name)](#FastTypeCheck.parseObject) ⇒ <code>\*</code>
    * [.checkNested(Main, Name, Name, Name)](#FastTypeCheck.checkNested) ⇒ <code>true</code> \| <code>false</code>
    * [.getNestedValue(Main, Path)](#FastTypeCheck.getNestedValue) ⇒ <code>\*</code>
    * [.setNestedValue(Main, Path, Value)](#FastTypeCheck.setNestedValue) ⇒ <code>object</code>
    * [.cleanObject(Object)](#FastTypeCheck.cleanObject) ⇒ <code>object</code>

<a name="FastTypeCheck.getType"></a>

### FastTypeCheck.getType(element) ⇒ <code>string</code>
Get the real type of this element.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**Returns**: <code>string</code> - Prototype type as a string.  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isArray"></a>

### FastTypeCheck.isArray(element) ⇒ <code>boolean</code>
Check if this is an array or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isObject"></a>

### FastTypeCheck.isObject(element) ⇒ <code>boolean</code>
Check if this is an object or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isEmptyObject"></a>

### FastTypeCheck.isEmptyObject(element) ⇒ <code>boolean</code>
Check if this is an empty object or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isString"></a>

### FastTypeCheck.isString(element) ⇒ <code>boolean</code>
Check if this is a string or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isDate"></a>

### FastTypeCheck.isDate(element) ⇒ <code>boolean</code>
Check if this is a date or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isNumber"></a>

### FastTypeCheck.isNumber(element) ⇒ <code>boolean</code>
Check if this is a number or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isFunction"></a>

### FastTypeCheck.isFunction(element) ⇒ <code>boolean</code>
Check if this is a function or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isRegexp"></a>

### FastTypeCheck.isRegexp(element) ⇒ <code>boolean</code>
Check if this is a regular expression or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isBoolean"></a>

### FastTypeCheck.isBoolean(element) ⇒ <code>boolean</code>
Check if this is a boolean or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isNull"></a>

### FastTypeCheck.isNull(element) ⇒ <code>boolean</code>
Check if this is null or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isUndefined"></a>

### FastTypeCheck.isUndefined(element) ⇒ <code>boolean</code>
Check if this is undefined or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isMongoObject"></a>

### FastTypeCheck.isMongoObject(element) ⇒ <code>boolean</code>
Check if this a MongoDB object or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isArrayOfObjects"></a>

### FastTypeCheck.isArrayOfObjects(element) ⇒ <code>boolean</code>
Check if this a string or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isArrayOfArrays"></a>

### FastTypeCheck.isArrayOfArrays(element) ⇒ <code>boolean</code>
Check if this is an array of objects or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isArrayOfStrings"></a>

### FastTypeCheck.isArrayOfStrings(element) ⇒ <code>boolean</code>
Check if this is an array of strings or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isArrayOfNumbers"></a>

### FastTypeCheck.isArrayOfNumbers(element) ⇒ <code>boolean</code>
Check if this is an array of numbers or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isArrayOfMongoObjects"></a>

### FastTypeCheck.isArrayOfMongoObjects(element) ⇒ <code>boolean</code>
Check if this is an array of MongoDB objects or not.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 

<a name="FastTypeCheck.isEqual"></a>

### FastTypeCheck.isEqual(element, element) ⇒ <code>boolean</code>
isEqual uses Object.is() and determines whether two values are the same value.
Two values are the same if one of the following holds:

   - both undefined
   - both null
   - both true or both false
   - both strings of the same length with the same characters in the same order
   - both the same object (means both object have same reference)
   - both numbers and
       - both +0
       - both -0
       - both NaN
       - or both non-zero and both not NaN and both have the same value

This is not the same as being equal according to the == operator.
The == operator applies various coercions to both sides (if they are not the same Type)
before testing for equality (resulting in such behavior as "" == false being true),
but Object.is doesn't coerce either value.

This is also not the same as being equal according to the === operator. The === operator
(and the == operator as well) treats the number values -0 and +0 as equal and treats
Number.NaN as not equal to NaN.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| element | <code>\*</code> | 
| element | <code>\*</code> | 

**Example**  
```js
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// Special Cases
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```
<a name="FastTypeCheck.isEqualArrays"></a>

### FastTypeCheck.isEqualArrays(array1, array2) ⇒ <code>boolean</code>
Check if these arrays are equal. Checking every value with isEqual.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| array1 | <code>array</code> | 
| array2 | <code>array</code> | 

<a name="FastTypeCheck.isEqualObjects"></a>

### FastTypeCheck.isEqualObjects(object1, object2) ⇒ <code>boolean</code>
Check if these objects are equal. Doing a deep equal.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| object1 | <code>object</code> | 
| object2 | <code>object</code> | 

<a name="FastTypeCheck.isInArray"></a>

### FastTypeCheck.isInArray(array, element) ⇒ <code>boolean</code>
Check if element is part of array.
Can be used on:
    - Array of objects
    - Array of arrays
    - Array of simple values.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| element | <code>\*</code> | 

<a name="FastTypeCheck.ensureNumber"></a>

### FastTypeCheck.ensureNumber(input) ⇒ <code>number</code>
Ensure that input is a number.
If input is:
    - a number. Returns this number.
    - an array. Returns 0.
    - a boolean and true. Returns 0.
    - a string. Trying to parse number. Returns the value if successful.
If none of above is successful. Returns 0.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| input | <code>\*</code> | 

<a name="FastTypeCheck.ensureString"></a>

### FastTypeCheck.ensureString(input) ⇒ <code>string</code>
Ensure that input is a string.
If input is:
    - a string. Returns string.
    - an array, a number, a date or a boolean. Returns element casted to string.
If none of above is successful. Returns ''.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| input | <code>\*</code> | 

<a name="FastTypeCheck.ensureArray"></a>

### FastTypeCheck.ensureArray(input) ⇒ <code>array</code>
Ensure that input is an array.
If input is:
    - an array. Returns array.
    - a string, a number, a date, a boolean or null. Returns an array with input as the element.
If none of above is successful. Returns [].

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| input | <code>\*</code> | 

<a name="FastTypeCheck.ensureObject"></a>

### FastTypeCheck.ensureObject(input) ⇒ <code>object</code>
Ensure that input is an object.
If input is:
    - an object. Returns object.
    - a non empty string. Returns an object `{ input: input }`.
    - a number !== 0. Returns an object `{ input: input }`.
If none of above is successful. Returns {}.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| input | <code>\*</code> | 

<a name="FastTypeCheck.ensureUniqArray"></a>

### FastTypeCheck.ensureUniqArray(input) ⇒ <code>array</code>
Ensure that input array has uniq values.
Removes duplicate values from array.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| input | <code>array</code> | 

<a name="FastTypeCheck.ensureDate"></a>

### FastTypeCheck.ensureDate(input) ⇒ <code>array</code>
Ensure that input is a date.
If input is:
    - a date: Returns date.
    - a string: Trying to parse date and returns date if successful.
    - a number: Trying to figure out if this is an epoch. If successful, returns date.
If none of above is successful. Returns `null`.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type |
| --- | --- |
| input | <code>array</code> | 

<a name="FastTypeCheck.asNumber"></a>

### FastTypeCheck.asNumber()
**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**See**: ensureNumber  
<a name="FastTypeCheck.asString"></a>

### FastTypeCheck.asString()
**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**See**: ensureString  
<a name="FastTypeCheck.asArray"></a>

### FastTypeCheck.asArray()
**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**See**: ensureArray  
<a name="FastTypeCheck.asObject"></a>

### FastTypeCheck.asObject()
**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**See**: ensureObject  
<a name="FastTypeCheck.asUniqArray"></a>

### FastTypeCheck.asUniqArray()
**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**See**: ensureUniqArray  
<a name="FastTypeCheck.asDate"></a>

### FastTypeCheck.asDate()
**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**See**: ensureDate  
<a name="FastTypeCheck.parseObject"></a>

### FastTypeCheck.parseObject(Main, Name, Name, Name) ⇒ <code>\*</code>
Get object deep value if it exists.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**Returns**: <code>\*</code> - object value  

| Param | Type | Description |
| --- | --- | --- |
| Main | <code>object</code> | object. |
| Name | <code>string</code> | of key on level 1. |
| Name | <code>string</code> | of key on level 2. |
| Name | <code>string</code> | of key on level n. |

**Example**  
```js
// Let's say you have object:
conat obj = {
    foo: {
        bar: 1
    }
};
// 1. You want to get the value obj.foo.bar if it exists:
parseObject(obj, 'foo', 'bar');
// -> returns 1
// 2. You want to get the value obj.foo.bar.gomle if it exists:
parseObject(obj, 'foo', 'bar', 'gomle');
// -> returns null
```
<a name="FastTypeCheck.checkNested"></a>

### FastTypeCheck.checkNested(Main, Name, Name, Name) ⇒ <code>true</code> \| <code>false</code>
Check if object has deep value.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  

| Param | Type | Description |
| --- | --- | --- |
| Main | <code>object</code> | object. |
| Name | <code>string</code> | of key on level 1. |
| Name | <code>string</code> | Name of key on level 2. |
| Name | <code>string</code> | Name of key on level n. |

**Example**  
```js
Let's say you have object:
     obj = {
           foo: {
               bar: 1
           }
       };
   1. You want to check if obj.foo.bar exists:
     checkNested(obj, 'foo', 'bar');
         returns true
   2. You want to check if obj.foo.bar.gomle exists:
     checkNested(obj, 'foo', 'bar', 'gomle');
         returns false
```
<a name="FastTypeCheck.getNestedValue"></a>

### FastTypeCheck.getNestedValue(Main, Path) ⇒ <code>\*</code>
Get object deep value if it exists.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**Returns**: <code>\*</code> - object value  

| Param | Type | Description |
| --- | --- | --- |
| Main | <code>object</code> | object. |
| Path | <code>string</code> | to value. |

**Example**  
```js
Let's say you have object:
     obj = {
           foo: {
               bar: 1
           }
       };
   1. You want to get the value of obj.foo.bar if it exists:
     getNestedValue(obj, 'foo.bar');
         returns 1
   2. You want to get the value of obj.foo.bar.gomle if it exists:
     getNestedValue(obj, 'foo.bar.gomle');
         returns false
```
<a name="FastTypeCheck.setNestedValue"></a>

### FastTypeCheck.setNestedValue(Main, Path, Value) ⇒ <code>object</code>
Set object deep value.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**Returns**: <code>object</code> - Object with new value.  

| Param | Type | Description |
| --- | --- | --- |
| Main | <code>object</code> | object. |
| Path | <code>string</code> | to value. |
| Value | <code>\*</code> | to set. |

<a name="FastTypeCheck.cleanObject"></a>

### FastTypeCheck.cleanObject(Object) ⇒ <code>object</code>
Remove empty key, values from an object.

**Kind**: static method of [<code>FastTypeCheck</code>](#FastTypeCheck)  
**Returns**: <code>object</code> - Cleand object.  

| Param | Type | Description |
| --- | --- | --- |
| Object | <code>object</code> | to be cleaned. |



### Howto update API docs
```bash
$ npm run docs
```

### Howto report issues

Use the [Issue tracker](https://github.com/5orenso/fast-type-check/issues)


### Versioning

For transparency and insight into the release cycle, releases will be
numbered with the follow format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backwards compatibility bumps the major
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on semantic versioning, please visit http://semver.org/.


## Contributions and feedback:

We ❤️ contributions and feedback.

If you want to contribute, please check out the [CONTRIBUTING.md](CONTRIBUTING.md) file.

If you have any question or suggestion create an issue.

Bug reports should always be done with a new issue.


## Other Resources

* [AWS Basic setup with Cloudformation](https://github.com/5orenso/aws-cloudformation-base)
* [AWS Lambda boilerplate](https://github.com/5orenso/aws-lambda-boilerplate)
* [Automated AWS Lambda update](https://github.com/5orenso/aws-lambda-autodeploy-lambda)
* [AWS API Gateway setup with Cloudformation](https://github.com/5orenso/aws-cloudformation-api-gateway)
* [AWS IoT setup with Cloudformation](https://github.com/5orenso/aws-cloudformation-iot)


## More about the author

- Twitter: [@sorenso](https://twitter.com/sorenso)
- Instagram: [@sorenso](https://instagram.com/sorenso)
- Facebook: [@sorenso](https://facebook.com/sorenso)
