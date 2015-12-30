### Mocha + Grunt

This example shows how to use Babel in conjunction with Mocha and Grunt.

### Installation

1. Clone this repository
2. Navigate to this directory via `cd examples/mocha-grunt`
3. Install the `npm` dependencies via `npm install`

### Running the tests

Run `npm test`

### How it works

When `npm test` is run, the aliased `script` in our `package.json` is run. That
alias is simply `grunt`, which runs the default `grunt` task.

This task is defined in `gruntfile.js`. Let's look at that task.

#### `grunt-mocha-test`

Because these are Node-only tests, we're using the
[grunt-mocha-test](https://github.com/pghalliday/grunt-mocha-test) package. The
more idiomatically-named `grunt-mocha` is for running tests in PhantomJS, but
that's a use case for another example.

#### `babel-register`

The key to this example is specifying `babel-register` in the `require` option
for `mochaTest`. This use case is described in
[the documentation](https://github.com/pghalliday/grunt-mocha-test#specifying-compilers)
for that Grunt task.

#### `.babelrc`

There's one last important detail that makes all of this work: the `.babelrc`
file. Our configuration in that file tells Babel that we want to transpile
ES2015 code into ES5 code. This is necessary because Babel makes no assumptions
about how you want to transform the code as of v6.

#### A note on Chai

These examples all use Chai as the assertion library for the tests. It should be
relatively straightforward to swap it out for your assertion library of choice,
which is why I haven't included other examples. If you're having trouble,
[raise an issue](https://github.com/jmeas/testing-with-babel/issues) and I'll be
glad to help out.
