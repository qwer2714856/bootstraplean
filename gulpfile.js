// Include gulp
var gulp = require('gulp');
// Include 外掛
var sass = require('gulp-sass');
// 編譯 Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});
/**
sass 工作會編譯任何在 scss/ 目錄底下的 .Sass 檔，而且會把檔案存在 css/ 底下為 .css 檔
**/
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});
// 預設工作
gulp.task('default', ['sass']);
