var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require("babelify"),
    partialify = require('partialify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    sourcePath = 'source/**/*.js',
    distPath = 'build/'
    ;

var tasks = [
    {
        name: 'sw',
        entries: './source/index.js',
        transforms: [babelify, partialify],
        source: 'index.js',
        outputName: 'star-wars.js',
        sourceMapsDirectory: './maps/',
        outputDirectory: './js/'
    }
];

tasks.forEach(function (task) {
    gulp.task(task.name, function () {
        return browserify({
            entries: task.entries,
            transform: task.transforms
        }).bundle()
        .pipe(source(task.source))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .on('error', function(err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(rename(task.outputName))
        .pipe(sourcemaps.write(task.sourceMapsDirectory))
        .pipe(gulp.dest(task.outputDirectory));
    });
});

gulp.task('watch', function () {
    gulp.watch('./source/**/*.*', ['sw']);
});

gulp.task('default', ['sw']);
