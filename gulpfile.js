// Include gulp
var gulp = require('gulp');
// Include ���
var sass = require('gulp-sass');
// ���g Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});
/**
sass ���������g�κ��� scss/ Ŀ䛵��µ� .Sass �n�����ҕ��љn������ css/ ���� .css �n
**/
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});
// �A�O����
gulp.task('default', ['sass']);
