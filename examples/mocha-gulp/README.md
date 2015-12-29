### Mocha + Gulp

This example shows how to use Babel in conjunction with Mocha and Gulp.

### Installation

1. Clone this repository
2. Navigate to this directory via `cd examples/mocha-gulp`
3. Install the `npm` dependencies via `npm install`

### Running the tests

Run `npm test`

### How it works

When `npm test` is run, the aliased `script` in our `package.json` is run. That
alias is simply `gulp`, which runs the default `gulp` task.

This task is defined in `gulpfile.babel.js`. Let's look at that file.

#### `gulpfile.babel.js`

You may be surprised to see that this file is exactly the same file as if we
weren't using Babel. You might be wondering how that works.

The trick is that we've implicitly told Babel to transpile all of our files.
That is, in fact, the way that `gulpfile.babel.js` works. When you run any
`gulp` command within a Babel'd `gulpfile`, you will notice on the command line
that the first thing that is output is:
`Requiring external module babel-core/register`.

That's the code that transpiles everything that follows.

If we **weren't** using `gulpfile.babel.js`, we would need to manually require
in the module `babel-register`. Do keep that in mind if you decide not to use
ES2015 in your `gulpfile`.

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
