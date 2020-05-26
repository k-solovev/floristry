'use strict';

const gulp = require ('gulp');
const sass = require ('gulp-sass');
const postcss = require ('gulp-postcss');
const autoprefixer = require ('autoprefixer');
const plumber = require ('gulp-plumber');
const browserSync = require ('browser-sync').create();
const csso = require ('gulp-csso');
const rename = require ('gulp-rename');
const imageMin = require ('gulp-imagemin');
const webp = require ('gulp-webp');

gulp.task('webp', function () {
  return gulp.src("src/img/**/*.{png,jpg}")
  .pipe(webp())
  .pipe(gulp.dest('src/img'));
});

gulp.task('images', function () {
  return gulp.src("src/img/**/*.{png,jpg}")
  .pipe(imageMin())
  .pipe(gulp.dest('src/img'));
});

gulp.task('css', function () {
  return gulp.src('src/scss/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([ autoprefixer() ]))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream())
});

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: 'src/',
      index: 'index.html'
    },
    notify: false
  })

  browserSync.watch('src/scss/**/*.scss', gulp.series('css'));
  browserSync.watch('src/*.html').on('change', browserSync.reload);
});
