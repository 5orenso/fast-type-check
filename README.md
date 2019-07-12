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
    console.log('this is an array of objects.')
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

- ensureNumber
- ensureString
- ensureArray
- ensureObject
- ensureUniqArray


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
