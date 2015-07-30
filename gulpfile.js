var gulp = require('gulp')
var server = require('gulp-server-livereload')
var sass = require('gulp-sass');

gulp.task('compile-sass', function() {
	gulp.src('./src/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css'))
})

gulp.task('move-html', function() {
	gulp.src('./src/html/**/*.html')
		.pipe(gulp.dest('./public/'))
})

gulp.task('move-assets', function() {
	gulp.src('./src/assets/**/*')
		.pipe(gulp.dest('./public/'))
})



gulp.task('start-server', function() {
	gulp.src('./public/')
		.pipe(server({
			livereload: true,
			open: true
		}))
})

gulp.task('watch', ['start-server', 'move-html', 'compile-sass', 'move-assets'], function() {
	gulp.watch('./src/**/*', ['move-html','compile-sass', 'move-assets'])
})