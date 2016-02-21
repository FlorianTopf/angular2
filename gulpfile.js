var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var ts = require('gulp-typescript');
var tsd = require('gulp-tsd');
var webserver = require('gulp-webserver');
var tslint = require('gulp-tslint');

// run init tasks
gulp.task('default', ['dependencies', 'ts', 'html', 'css']);

// run development task
gulp.task('dev', ['default', 'watch', 'serve']);

// serve the build dir
gulp.task('serve', function () {
    gulp.src('build').pipe(webserver({ open: true }));
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['ts']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.css', ['css']);
});

// install type definitions (deprecated)
gulp.task('tsd', function (callback) {
    tsd({
        "command": "reinstall",
        "latest": true,
        "config": "tsd.json"
    }, callback);
});

// move lib dependencies into build dir
gulp.task('dependencies', function () {
    return gulp.src([
        'node_modules/es6-shim/es6-shim.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js'
    ]).pipe(gulp.dest('build/lib'));
});

// lint typescript files
gulp.task('tslint', function () {
    return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

// compile & move js
gulp.task('ts', ['tslint'], function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = gulp.src([
        'typings/tsd.d.ts',
        'node_modules/angular2/typings/browser.d.ts',
        'src/**/*.ts'
    ]).pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('build'));
});

// move html
gulp.task('html', function () {
    return gulp.src('src/**/*.html').pipe(gulp.dest('build'))
});

// move css
gulp.task('css', function () {
    return gulp.src('src/**/*.css').pipe(gulp.dest('build'))
});
