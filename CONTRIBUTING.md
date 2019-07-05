Getting Started
----
We would :heart: to have pull requests from you. So here is how to start development with Node Express Boilerplate.

First fork and clone the repo:
````bash
git clone https://github.com/5orenso/fast-type-check.git
````

Then run this to set it all up:
```bash
$ cd fast-type-check
$ npm install
```

In addition to this I recommend using npm to watch your files and perform code analysis and run tests every time a
file changes:
```bash
$ npm run test:watch
```

You are now ready to start doing your changes.


Testing
----
Node Simple Boilerplate uses npm and Jest to run test. Take a look in the `__tests__` directory and always add tests
to your changes.


Changes
----
If you want to do any changes please [create an issue](https://github.com/5orenso/fast-type-check/issues/new).

Bug fixes is of course welcome at any time :+1:


Pull Requests
----
So you are ready to make a PR? Great! :smile:

But first make sure you have checked some things.

* Your code should follow the code style guide provided by [.eslintrc](https://github.com/5orenso/fast-type-check/blob/master/.eslintrc.json) by running ``npm run lint`` or ``npm run test``
* Don't commit build changes. No `dist/` or `bin/` changes in the PR.
