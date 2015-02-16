var gulp = require('gulp')
,	stylus = require('gulp-stylus')
, connect = require('gulp-connect-multi')();
gulp.task('stylus', function(){
  gulp.src('src/stylus/*.styl')
    .pipe(stylus({
     compress: true
   }))
    .pipe(gulp.dest('./build/css'))
  })

gulp.task('arquivos', function(){
  gulp.src(['./src/**/**', '!src/stylus'])
    .pipe(gulp.dest('./build'))
  })

gulp.task('servidor', connect.server({
 	root: ['build'],
 	port: 1337,
 	livereload: true,
 	open: {
    browser: 'chrome' //ou firefox ou safari... se for OSX é 'Google Chrome'
  }
}))

gulp.task('default', ['stylus', 'arquivos', 'servidor']);