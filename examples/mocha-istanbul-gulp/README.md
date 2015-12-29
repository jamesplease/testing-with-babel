### Mocha + Istanbul + Gulp

This example shows how to use Babel in conjunction with Mocha, Istanbul, and
Gulp.

### Installation

1. Clone this repository
2. Navigate to this directory via `cd examples/mocha-gulp`
3. Install the `npm` dependencies via `npm install`

### Running the tests

To only run the unit tests, run `npm test`. For coverage reports, run
`npm coverage`.

### How it works

The `npm test` command is explained in
[the `mocha-gulp` example](../mocha-gulp#how-it-works); it's identical to the
one here.

The `npm run coverage` command is new, though. It's basically a minor
refactor of the example given in the `gulp-istanbul`
[documentation](https://github.com/SBoudrias/gulp-istanbul#nodejs-testing);
whereas they recommend using two gulp tasks, it can be made into one by using
stream events.

In addition, the [`instrumenter` property](https://github.com/SBoudrias/gulp-istanbul#instrumenter)
is utilized, which is the recommended way to use isparta with `gulp-istanbul`.

#### `.babelrc`

There's one last important detail that makes all of this work: the `.babelrc`
file. Our configuration in that file tells Babel that we want to transpile
ES2015 code into ES5 code. This is necessary because Babel makes no assumptions
about how you want to transform the code as of v6.

#### `gulpfile.babel.js`

By installing the `babel-core` module, we're able to write ES2015 in our
Gulpfile by naming the file `gulpfile.babel.js`. Keep in mind that the only
reason we need `babel-core` is to enable this feature. If you don't wish to
use ES2015 in your Gulpfile, then you do not need to specify that dependency.

#### A note on Chai

These examples all use Chai as the assertion library for the tests. It should be
relatively straightforward to swap it out for your assertion library of choice,
which is why I haven't included other examples. If you're having trouble,
[raise an issue](https://github.com/jmeas/testing-with-babel/issues) and I'll be
glad to help out.
