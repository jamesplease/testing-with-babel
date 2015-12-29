import gulp from 'gulp';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';

function test() {
  return gulp.src('unit/*.js')
    .pipe(mocha());
}

function coverage(done) {
  gulp.src(['src/*.js'])
    .pipe(istanbul({ instrumenter: Instrumenter }))
    .pipe(istanbul.hookRequire())
    .on('finish', function() {
      return test()
      .pipe(istanbul.writeReports())
      .on('end', done);
    });
}

// Run our tests as the default task
gulp.task('default', test);
gulp.task('coverage', coverage);
