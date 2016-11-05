var webpack = require('webpack');
var ReloadPlugin = require('webpack-reload-plugin');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Support for extra commandline arguments
 */
var argv = require('optimist')
    .alias('r','release').default('r', false)
    .argv;

/**
 * Useful variables
 */
var cwd = process.cwd();
var DEBUG = !argv.release;
var isDevServer = process.argv.join('').indexOf('webpack-dev-server') > -1;
var version = require(path.resolve(cwd,'package.json')).version;
var reloadHost = '0.0.0.0';
var npmRoot = __dirname + '/node_modules';
var appDir = __dirname + '/src';

var entry = ['./src/app/main.ts'];

if (isDevServer) {
    entry.unshift('webpack-dev-server/client?http://'+reloadHost+':8080');
}

function makeConfig(options) {
    return {
        cache: true,
        debug: true,
        verbose: true,
        displayErrorDetails: true,
        displayReasons: true,
        displayChunks: true,
        context: __dirname,
        entry: {
            vendor: './src/app/vendor.ts',
            app: entry
        },
        stats: {
            colors: true,
            reasons: DEBUG
        },
        devtool: 'source-map',
        recordsPath: path.resolve('.webpack.json'),
        devServer: {
            inline: true,
            colors: true,
            contentBase: path.resolve(cwd, 'build'),
            publicPath: '/'
        },
        output: {
            path: path.resolve(cwd, 'build'),
            filename: "[name].js",
            publicPath: isDevServer ? 'http://0.0.0.0:8080/' : './',
            chunkFilename: "[id].bundle.js",
            // Hot Module Replacement settings:
            hotUpdateMainFilename: "updates/[hash].update.json",
            hotUpdateChunkFilename: "updates/[hash].[id].update.js"
        },
        plugins: [
            new webpack.IgnorePlugin(/spec\.js$/),
            new webpack.optimize.CommonsChunkPlugin(
                {
                    name: 'vendor',
                    filename: 'vendor.js',
                    minChunks: Infinity
                }
            ),
            new webpack.optimize.CommonsChunkPlugin(
                {
                    name: 'common',
                    filename: 'common.js',
                    minChunks: 2,
                    chunks: ['app', 'vendor']
                }
            ),
            new ExtractTextPlugin('[name].css'),
            new webpack.DefinePlugin({
                VERSION: JSON.stringify(version),
                ENV: JSON.stringify(options.env)
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new HtmlWebpackPlugin({
                template: path.join(appDir, 'index.html'),
            }),
            new ReloadPlugin(isDevServer ? 'localhost' : ''),
            new WebpackNotifierPlugin({
                title: 'angular2 seed'
            })
        ],
        resolveLoader: {
            root: path.join(__dirname, 'node_modules'),
            modulesDirectories: ['node_modules'],
            fallback: path.join(__dirname, 'node_modules')
        },
        resolve: {
            root: [path.resolve(cwd)],
            modulesDirectories: ['node_modules', 'src', 'src/app', '.'],
            extensions: ['', '.ts', '.js', '.json', '.css'],
            alias: {
                'app': 'app',
                'scripts': npmRoot
            }
        },
        module: {
            preLoaders: [
                { test: /\.ts$/, loader: 'tslint' }
            ],
            loaders: [
                { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]' },
                { test: /\.json$/, loader: 'json' },
                { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') },
                { test: /\.html$/, loader: 'raw-loader' },
                { test: /^index\.html$/, loader: 'file-loader?name=[path][name].[ext]' },
                { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
                { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader' }
            ],
            noParse: [
                /\.min\.js/,
                /\.min\.css/
            ]
        },
        tslint: {
            configuration: require('./tslint.json'),
            emitErrors: false,
            failOnHint: false
        }
    }
}

var config = makeConfig(argv);

console.log(require('util').inspect(config, {depth: 10}));
module.exports = config;
