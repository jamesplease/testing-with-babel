### Mocha + Istanbul + CLI

This example shows how to use Babel in conjunction with Mocha and Istanbul. It
allows you to run the tests by themselves, but also to run them with code
coverage.

### Installation

1. Clone this repository
2. Navigate to this directory via `cd examples/mocha-istanbul-cli`
3. Install the `npm` dependencies via `npm install`

### Running the scripts

To run the tests, run `npm test`. For code coverage, run `npm run coverage`.

### How it works

For a description of the `npm test` command, refer to the
[`mocha-cli` example](../mocha-cli#how-it-works). The script here is identical
to the one in that example.

What's new to this example is the `npm run coverage` script. I'd love to
walk through it step-by-step with you, but I'd be lying if I said I understood
*exactly* how it works. I'll do my best and explain what I do know, though.

The first thing you might be wondering is...where's Instanbul? This example
*does* use Istanbul, just indirectly.
[isparta](https://github.com/douglasduteil/isparta) is a wrapper for Istanbul
that allows us to write ES2015 code.

Back to the command. It starts off with `babel-node`, which is
[a tool](http://babeljs.io/docs/usage/cli/#babel-node) provided by Babel. What
it does is automatically transpile any subsequent scripts run in Node.

The script that we execute is `node_modules/.bin/isparta`. The directory
`node_modules/.bin` is provided to us by `npm`: it's a collection of all of the
executables in [the locally-installed node_modules](https://docs.npmjs.com/files/folders#executables).

This tells `babel-node` to execute `isparta`'s executable.

Next up is `cover`. This seems to be an API that `isparta` inherited from
`istanbul`.

The last piece is `_mocha`, which users of `istanbul` will know differs from
the standard `istanbul` CLI. What this is is a reference to the `_mocha`
executable from the `mocha` npm package. Did you know that such a thing
existed? As a consumer of mocha, and not a maintainer, I did not before
using isparta.

We can see from [the repository](https://github.com/mochajs/mocha/tree/d811eb9614e5b459dabb4f2496e69f961decec90/bin)
that mocha's main , `mocha`, is a small wrapper around the `_mocha` executable,
which does most of the heavy lifting.

`isparta` only works with `_mocha`, and not `mocha`. Why? I'm not sure. That's
what I meant about not fully understanding this command. I learned how to do
this from
[the `isparta` documentation](https://github.com/douglasduteil/isparta#usage),
but the docs do go into much depth as to why it must work this way.

I'd love to elaborate further on how this command works. Got any ideas? Please
let me know
[by opening an issue](https://github.com/jmeas/testing-with-babel/issues/new)!

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
