'use strict';

var config        = require('../config');
var gulp          = require('gulp');

gulp.task('watch', ['nodemon'], function() {

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['lint']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);

});