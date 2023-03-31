const gulp = require('gulp');  /*загружает из node modules */
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const stripCssComments = require('gulp-strip-css-comments');

gulp.task('minify-css', function() {
  return gulp.src('./src/*.css') /*возвращает все css файлы */
    .pipe(stripCssComments()) /*применяет методы */
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('minify-css'));