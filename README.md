# testing-with-babel

> This is an active work-in-progress project. I plan to add 1-3 new
> configurations per day, so keep your eye on this project if you don't see
> what you're looking for!

Babel is a fantastic tool for transpiling JavaScript, but it can be difficult
to get it working with other tools in the Node ecosystem.

Perhaps the most important set of tools to get working with Babel are unit
testing tools. I've spent a long time trying to figure out how to get Babel
to work with these tools – scouring GitHub issues, reading blog posts, and
experimenting on my own – and everything that I've learned will be posted
here.

Am I missing a testing test up that you'd like to see?
[Make a request](https://github.com/jmeas/testing-with-babel), or better yet,
submit a PR!

#### How it works

This repository is a collection of examples which all live in the `examples`
directory. Every example has a README that explains how to get it
set up locally, and then steps through how it works.

To begin, you'll want to clone this repository. You can then either browse
through the list of examples in the `examples` directory, or in the table
of contents below.

#### What presets of Babel are used?

All of the examples in this project use only the
[ES2015 preset](http://babeljs.io/docs/plugins/preset-es2015/). This is because
this is the preset that the vast majority of people will care about: it's the
one that lets you author things in ES2015.

In the future, I plan to add some data around which set ups allow you to use
additional presets, like, say, `stage-2`. In the meantime, you can test on your
own the support for those presets.

#### Node-only Examples

These examples are suitable for libraries that you wish to test in Node only.

**Without code coverage**

- [Mocha + Chai, run on the CLI](examples/mocha-cli)
- [Mocha + Chai + Gulp](examples/mocha-gulp)
- [Mocha + Chai + Grunt](examples/mocha-grunt)

**With code coverage**

- [Mocha + Chai + Istanbul, run on the CLI](examples/mocha-istanbul-cli)
- [Mocha + Chai + Istanbul + Gulp](examples/mocha-istanbul-gulp)

#### Browser-only Examples

These are good for tests that you only want to run in browser environments,
and not Node.

*Coming soon*

#### Browser + Node environments

This section are examples showing how to run the tests in a browser and in Node.

*Coming soon*

### FAQ

**Are there any limitations to using Istanbul with Babel?**

Yes. The tool isparta is used to make Istanbul work with transpiled code, and
by and large it works great. The coverage report will look like your original
ES2015 code, and report accurately on the `lines` that are covered.

However, every other property that Istanbul measures will *still* be based on
the transpiled code. So the `statements`, `branches`, and `functions`
measurements will be based off of the code that Babel computes.

I haven't found this to be a problem on any of my projects, because I use
code coverage as a tool to give me an idea of how complete my test coverage is.
The approximation provided to me by using it with ES2015 is equally good for
accomplishing that goal.

However, if you're someone who requires that the coverage data be more precise,
then you may want to shy away from Babel for now (or update isparta to be
more accurate!)

#### To-do

##### Node only

- Mocha
  - [x] CLI
  - [x] Gulp
  - [x] Grunt
- Mocha + Istanbul
  - [x] CLI
  - [x] Gulp
  - [ ] Grunt
- Mocha + JSDom
  - [ ] CLI
  - [ ] Gulp
  - [ ] Grunt
- Mocha + Istanbul + JSDom
  - [ ] CLI
  - [ ] Gulp
  - [ ] Grunt

##### Browser only

- [ ] Mocha + Runner HTML file
- [ ] Mocha + PhantomJS CLI
- [ ] Mocha + PhantomJS + Runner HTML file
- [ ] Mocha + Karma (no coverage)
- [ ] Mocha + Karma (with coverage)
- [ ] Mocha + Karma (without coverage) + Runner HTML File
- [ ] Mocha + Karma (with coverage) + Runner HTML File

##### Node + Browser

- Mocha/Chai + Karma
  - [ ] CLI
  - [ ] Gulp
  - [ ] Grunt
