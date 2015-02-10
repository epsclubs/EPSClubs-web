var gulp = require('gulp');
var config = require('../config').app;
var react = require('gulp-react');

gulp.task('app', function() {
  return gulp.src(config.src)
    // .pipe(react())
    .pipe(gulp.dest(config.dest));
});
