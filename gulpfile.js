const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', function () {
    return gulp.src('src/index.jsx')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build'])
