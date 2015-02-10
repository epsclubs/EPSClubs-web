var gulp = require('gulp');

gulp.task('build', ['app', 'browserify', 'server','views', 'less', 'fonts', 'muiFonts']);
