const gulp = require('gulp');  /*загружает из node modules */
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const stripCssComments = require('gulp-strip-css-comments');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const replace = require('gulp-replace');

gulp.task('minify-css', function() {
  return gulp.src('./src/*.css') /*возвращает все css файлы */
    .pipe(stripCssComments()) /*применяет методы */
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('minify-html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});
 
gulp.task('replace-css', function () {
    return gulp.src('./dist/**/*.html')
      .pipe(replace(/\.css/g, '.min.css'))
      .pipe(gulp.dest('./dist'));
  });

gulp.task('replace-js', function () {
    return gulp.src('./dist/**/*.html')
      .pipe(replace(/\.js/g, '.min.js'))
      .pipe(gulp.dest('./dist'));
  });
  
 gulp.task('watch', function() {
    gulp.watch('src/*.html', gulp.series('allHtml','minify-html'));
    gulp.watch('src/*.css', gulp.series('styles','minify-css'));
    gulp.watch('src/*.js', gulp.series('scripts','minify-js'));
  })

  gulp.task('build', gulp.series('minify-html', 'minify-css',
   'minify-js', 'replace-css','replace-js' ));
   

 

  