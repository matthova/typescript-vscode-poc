var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsconfig = require('./tsconfig.json');

gulp.task('default', function () {
  return gulp.src('src/**/*.ts')
  .pipe(sourcemaps.init())
  .pipe(ts(tsconfig.compilerOptions))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist'));
});
