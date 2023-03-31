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


const htmlmin = require('gulp-htmlmin');
gulp.task('minify-html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
gulp.task('default', gulp.series('minify-html'));


const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
gulp.task('minify-js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});
gulp.task('default', gulp.series('minify-js'));


gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
  });
  gulp.task('default', gulp.series('scripts'));
 
  
gulp.task('styles', function() {
    return gulp.src('./src/css/*.css')
      .pipe(concat('main.min.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest('./dist/css'));
  });
  gulp.task('default', gulp.series('styles'));

  
gulp.task('html', function() {
    return gulp.src('./src/*.html')
      .pipe(concat('index.html'))
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./dist'));
  });
  
  gulp.task('default', gulp.series('html'));


  const imagemin = require('gulp-imagemin').default;

  