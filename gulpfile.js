const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// compile my scss to css and place them in src/css folder
gulp.task('sass', () => {
  return gulp
          .src(['./public/scss/index.scss'])
          .pipe(sass()) // convert sass to css
          .pipe(gulp.dest('./public/css')) // take css to source
          .pipe(browserSync.stream()); 
});

// Move the javascript files into our /src/js folder
gulp.task('js', () => {
  return gulp
          .src(['./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/jquery/dist/jquery.min.js', './node_modules/popper.js/dist/popper.min.js'])
          .pipe(gulp.dest('./public/js'))
          .pipe(browserSync.stream());
});

// Static server + watching scss/html files
gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './public'
  });

  gulp.watch(['./public/scss/*.scss'], ['sass']);
  gulp.watch('./public/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);  