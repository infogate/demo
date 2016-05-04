var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('bs', function() {
    browserSync.init({
        proxy: "demo.app"
    });
    gulp.watch("*.html").on('change', browserSync.reload);
});