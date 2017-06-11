// gulp-livereload
// gulp

var gulp = require("gulp"),
	livereload = require('gulp-livereload');

gulp.task('watch', function() {
	livereload.listen();

	gulp.watch('/*.css', function(file) {
		gulp.src(file.path).pipe(livereload)
	})
})