'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    debug = require('gulp-debug'),
    gulpIf = require('gulp-if'),
    concat = require('gulp-concat'),
    minifyJs = require('gulp-uglify'),
    del = require('del');

var isDevelopment = !process.env.NODE_ENV || process.NODE_ENV == 'development';

gulp.task('styles', function(){
    return gulp.src('frontend/styles/*.scss', {base: 'frontend'})
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('public'));
});

gulp.task('assets', function(){
    return gulp.src('frontend/assets/**')
        .pipe(gulp.dest('public'));
});

gulp.task('pages-js', function() {
    return gulp.src( 'frontend/js/*.js')
        .pipe(concat('project.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('clean', function(){
    return del('public');
});

gulp.task('watch', function(){
    gulp.watch('frontend/styles/*.scss', gulp.parallel('styles'));
    gulp.watch('frontend/js/*.js', gulp.parallel('pages-js'));
    gulp.watch('frontend/assets/**', gulp.parallel('assets'));
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('styles', 'pages-js', 'assets'),
    'watch')
);