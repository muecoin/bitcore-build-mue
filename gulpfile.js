const gulp = require('gulp');
var bitcoreTasks = require('../bitcore-build-mue');

bitcoreTasks('submodule');
gulp.task('test', ( console.log('It works!')));
