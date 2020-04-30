'use strict';

const gulp = require ('gulp');
const sourcemap = require ('gulp-sourcemaps');
const sass = require ('gulp-sass');
const autoprefixer = require ('autoprefixer');
const postcss = require ('gulp-postcss');
const plumber = require ('gulp-plumber');
const browserSync = require ('browser-sync').create();

gulp.task('css', function () {
  return gulp.src('src/scss/style.scss')
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([autoprefixer()]))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream())
});

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: 'src/',
      index: 'index.html',
      notify: false
    }
  })

  browserSync.watch('src/scss/**/*.scss', gulp.series('css'));
  browserSync.watch('src/*.html').on('change', browserSync.reload);
});
