var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config').browserSync;

gulp.task('browserSync', ['start_server'], function() {
  // browserSync(config);
  console.log('removed browserSync')
});
