### Mocha + CLI

This example shows how to use Babel in conjunction with Mocha. It doesn't use
any task runner, like Grunt or Gulp; it's CLI-based.

### Installation

1. Clone this repository
2. Navigate to this directory via `cd examples/mocha-cli`
3. Install the `npm` dependencies via `npm install`

### Running the tests

Run `npm test`

### How it works

When `npm test` is run, the aliased `script` in our `package.json` is run. We
can see in `package.json` that the associated command is:
`mocha unit/*.js --compilers js:babel-register`.

Let's break down that command piece-by-piece:

##### `mocha`

This is just running [the Mocha CLI](https://mochajs.org/#usage). It doesn't
need to be installed globally because we've specified `mocha` as a
`devDependency` for our package.

##### `unit/*.js`

These are where the unit tests are located.

#### `--compilers js:babel-register`

This is [an option exposed by Mocha's CLI](https://mochajs.org/#compilers). The
value we've passed indicates that for all files ending in `js`, we wish to use
the `babel-register` library to compile our code before running the tests.

The `babel-register` library is a tool that transpiles anything that we
`require` in. Because `mocha` is a Node tool, it ultimately `require`s in
each of our unit tests. This is what allows us to write our tests in ES2015
as well as our library itself.

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
