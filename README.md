# Fast-type-check to the rescue

[![Build Status](https://travis-ci.org/5orenso/fast-type-check.svg?branch=master)](https://travis-ci.org/5orenso/fast-type-check)
[![Coverage Status](https://coveralls.io/repos/github/5orenso/fast-type-check/badge.svg?branch=master)](https://coveralls.io/github/5orenso/fast-type-check?branch=master)
[![GitHub version](https://badge.fury.io/gh/5orenso%2Ffast-type-check.svg)](https://badge.fury.io/gh/5orenso%2Ffast-type-check)
[![npm version](https://badge.fury.io/js/fast-type-check.svg)](https://badge.fury.io/js/fast-type-check)

A nice, small and fast library for checking data types. Javascript is always a pain with type checking.

### Howto to get started
```bash
$ npm i fast-type-check --save
```

### Howto use the module
```javascript
const tc = require('fast-type-check');

if (tc.isNumber(123)) {
    console.log('this is a number :)');
}

if (tc.isNumber('123')) {
    console.log('this is not a number :(');
}
```

## Testing methods for datatypes

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
