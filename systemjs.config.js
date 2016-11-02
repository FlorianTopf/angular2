/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    var map = {
        // our app is within the app folder
        app: 'app',
        // other libraries
        'rxjs': 'lib/rxjs',
        'angular-in-memory-web-api': 'lib/angular-in-memory-web-api'
    };

    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular-in-memory-web-api': { main: 'index.js', defaultExtension: 'js'}
    };

    var angularPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'testing',
        'upgrade'
    ];

    // adding angular bundles to map
    angularPackageNames.forEach(function(pkgName) {
        var bundleDir = '@angular/' + pkgName;
        map[bundleDir] = 'lib/' + bundleDir + '/bundles/' + pkgName + '.umd.js';
    });

    System.config({
        // map tells the System loader where to look for things
        map: map,
        // packages tells the System loader how to load when no filename and/or no extension
        packages: packages
    });
})(this);
