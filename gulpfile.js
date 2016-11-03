var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var ts = require('gulp-typescript');
var webserver = require('gulp-webserver');
var tslint = require('gulp-tslint');

// TODO add clean tasks here

// run init tasks
gulp.task('default', ['libraries', 'ts', 'html', 'images', 'css']);

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

// move lib dependencies into build dir
gulp.task('libraries', function () {
    gulp.src('semantic/dist/themes/default/assets/fonts/*')
        .pipe(gulp.dest('build/lib/themes/default/assets/fonts'));

    gulp.src('systemjs.config.js').pipe(gulp.dest('build'));

    gulp.src('node_modules/rxjs/**/*')
        .pipe(gulp.dest('build/lib/rxjs'));

    gulp.src('node_modules/angular-in-memory-web-api/**/*')
        .pipe(gulp.dest('build/lib/angular-in-memory-web-api'));

    gulp.src('node_modules/@angular/**/*').pipe(gulp.dest('build/lib/@angular'));

    return gulp
        .src([
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js',
            'semantic/dist/semantic.css'
        ])
        .pipe(gulp.dest('build/lib'));
});

// lint typescript files
gulp.task('tslint', function () {
    return gulp
        .src('src/**/*.ts')
        .pipe(tslint({formatter: 'verbose'}))
        .pipe(tslint.report())
});

// compile & move js
gulp.task('ts', ['tslint'], function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = gulp.src('src/**/*.ts').pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('build'));
});

// move html
gulp.task('html', function () {
    return gulp.src('src/**/*.html').pipe(gulp.dest('build'))
});

// move images
gulp.task('images', function () {
    return gulp.src('src/**/*.gif').pipe(gulp.dest('build'))
});

// move css
gulp.task('css', function () {
    return gulp.src('src/**/*.css').pipe(gulp.dest('build'))
});
