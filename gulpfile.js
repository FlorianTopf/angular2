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

// install type definitions
gulp.task('tsd', function (callback) {
    tsd({
        "command": "reinstall",
        "latest": true,
        "config": "tsd.json"
    }, callback);
});

// move lib dependencies into build dir
gulp.task('dependencies', ['fonts'], function () {
    return gulp.src([
        'node_modules/es6-shim/es6-shim.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'semantic/dist/semantic.css'
    ]).pipe(gulp.dest('build/lib'));
});

// move font dependencies into build dir
gulp.task('fonts', function () {
   return gulp.src([
       'semantic/dist/themes/default/assets/fonts/*'
   ]).pipe(gulp.dest('build/lib/themes/default/assets/fonts'));
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
