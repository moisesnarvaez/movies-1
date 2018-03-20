var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
function handleError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .on('error', handleError)
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});
 
gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload); 
});

gulp.task('default', ['browserSync', 'sass', 'watch']);
