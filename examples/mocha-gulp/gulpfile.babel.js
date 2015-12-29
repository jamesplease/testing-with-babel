import gulp from 'gulp';
import mocha from 'gulp-mocha';

function test() {
  return gulp.src('unit/*.js')
    .pipe(mocha());
}

// Run our tests as the default task
gulp.task('default', test);
