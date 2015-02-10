var gulp = require('gulp');
var server = require('gulp-express');
var config = require('../config').start_server;

gulp.task('start_server', ['build'], function () {
  server.run(config);
});
