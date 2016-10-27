var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var ts = require('gulp-typescript');
var typings = require('gulp-typings');
var webserver = require('gulp-webserver');
var tslint = require('gulp-tslint');

// run init tasks
gulp.task('default', ['libraries', 'ts', 'html', 'css']);

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
gulp.task('typings', function () {
    gulp.src('./typings.json')
        .pipe(typings());
});

// move lib dependencies into build dir
gulp.task('libraries', ['fonts'], function () {
    gulp.src('systemjs.config.js')
        .pipe(gulp.dest('build'));

    gulp.src(['node_modules/rxjs/**/*'])
        .pipe(gulp.dest('build/lib/rxjs'));

    gulp.src(['node_modules/angular-in-memory-web-api/**/*'])
        .pipe(gulp.dest('build/lib/angular-in-memory-web-api'));

    gulp.src(['node_modules/@angular/**/*'])
        .pipe(gulp.dest('build/lib/@angular'));

    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
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
gulp.task('ts', ['tslint', 'typings'], function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = gulp.src([
        'typings/browser.d.ts',
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
