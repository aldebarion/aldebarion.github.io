var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');

gulp.task('connect', function() {
  connect.server({
    port: 8081,
    root: ['.'],
    livereload: true
  });
});

gulp.task('sass', function () {
  return gulp.src('./style/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style/'));
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['*.html'], ['html']);
  // gulp.watch(['./src/style/**/*.less'], ['less'])
  gulp.watch(['style/**/*.scss'], ['sass']);
});

gulp.task('start', ['sass', 'connect', 'watch']);
