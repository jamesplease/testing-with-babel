import gulp from 'gulp';
import mocha from 'gulp-mocha';

// Run our mocha tests
function _mocha() {
  return gulp.src('unit/*.js')
    .pipe(mocha());
}

// Hook `require` to transpile our test code
function _registerBabel() {
  require('babel-register');
}

function test() {
  _registerBabel();
  return _mocha();
}

// Run our tests as the default task
gulp.task('default', test);
