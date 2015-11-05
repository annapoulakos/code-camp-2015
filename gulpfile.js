var gulp = require('gulp'),
    fs = require('fs'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    partialify = require('partialify');

gulp.task('build', function () {
    return browserify({
        entries: './source/index.js',
        transform: [
            babelify,
            partialify
        ]
    }).bundle()
    .on('error', function (err) {
        console.error(err.toString());
        this.emit('end');
    })
    .pipe(fs.createWriteStream('build/index.js'));
});

gulp.task('watch', function () {
    gulp.watch('source/**/*.*', ['build']);
});
