# testing-with-babel

Babel is a fantastic tool for transpiling JavaScript, but it can be difficult
to get it working with other tools in the Node ecosystem.

Perhaps the most important set of tools to get working with Babel are unit
testing tools. I've spent a long time trying to figure out how to get Babel
to work with these tools – scouring GitHub issues, reading blog posts, and
experimenting on my own – and everything that I've learned will be posted
here.

Am I missing a testing test up that you'd like to see? Make a request.

#### How it works

This repository is a collection of npm modules which all live in the
`examples` directory. Every example has a README that explains how to get it
set up locally, and then steps through how it works.

To begin, you'll want to clone this repository. You can then either browse
through the list of examples in the `examples` directory, or in the table
of contents below.

#### Node-only Examples

These examples are suitable for libraries that you wish to test in Node only.

- [Mocha + Chai, run on the CLI](examples/mocha-cli)
- [Mocha + Chai + Gulp](examples/mocha-gulp)

#### Browser-only Examples

These are good for tests that you only want to run in browser environments,
and not Node.

*Coming soon*

#### Browser + Node environments

This section are examples showing how to run the tests in a browser and in Node.

*Coming soon*

#### To-do

##### Node only

- Mocha
  - [x] CLI
  - [x] Gulp
  - [ ] Grunt
- Mocha + Karma (no coverage)
  - [ ] CLI
  - [ ] Gulp
  - [ ] Grunt
- Mocha + Karma (with coverage)
  - [ ] CLI
  - [ ] Gulp
  - [ ] Grunt
- Mocha/Chai + Istanbul
  - [ ] CLI
  - [ ] Gulp
  - [ ] Grunt

##### Browser only

- [ ] Mocha + Runner HTML file
- [ ] Mocha + PhantomJS CLI
- [ ] Mocha + PhantomJS + Runner HTML file
- [ ] Mocha + Karma
- [ ] Mocha + Karma + Runner HTML File

##### Node + Browser

- Mocha/Chai + Karma
  - [ ] CLI
  - [ ] Gulp
  - [ ] Grunt
