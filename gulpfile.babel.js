/**
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

import path from 'path';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import {output as pagespeed} from 'psi';
import pkg from './package.json';
import sass from 'gulp-sass';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Lint JavaScript
gulp.task('lint', () =>
    gulp.src(['public/assets/scripts/**/*.js', '!node_modules/**'])
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.if(!browserSync.active, $.eslint.failAfterError()))
);

// Sass
gulp.task('sass', () => {
    return gulp.src('public/assets/styles/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('public/assets/styles')).pipe(gulp.dest('dist/public/assets/styles'));
});

// Optimize images
gulp.task('images', () =>
    gulp.src('public/assets/images/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/public/assets/images'))
        .pipe($.size({title: 'images'}))
);

gulp.task('ng-app', () =>
    gulp.src('app/**/*')
        .pipe(gulp.dest('dist/app'))
        .pipe($.size({title: 'ng-app'}))
);

// Copy all files at the root level (app)
gulp.task('copy', () =>
    gulp.src([
        '!node_modules/**/*',
        '!dist/**/*',
        './**/*.{json,js,html,txt}',
        'node_modules/apache-server-configs/dist/.htaccess'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'))
        .pipe($.size({title: 'copy'}))
);

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
    const AUTOPREFIXER_BROWSERS = [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ];

    // For best performance, don't add Sass partials to `gulp.src`
    return gulp.src([
        'public/assets/styles/**/*.scss',
        'public/assets/styles/**/*.css',
        '!public/assets/styles/_bootstrap-custom.scss'
    ])
        .pipe($.newer('.tmp/public/assets/styles'))
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            precision: 10
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('.tmp/public/assets/styles'))
        // Concatenate and minify styles
        .pipe($.if('*.css', $.cssnano()))
        .pipe($.size({title: 'styles'}))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('dist/public/assets/styles'))
        .pipe(gulp.dest('.tmp/public/assets/styles'))
        .pipe(gulp.dest('public/assets/styles'));
});

// Concatenate and minify JavaScript. Optionally transpiles ES2015 code to ES5.
// to enable ES2015 support remove the line `"only": "gulpfile.babel.js",` in the
// `.babelrc` file.
gulp.task('scripts', () =>
    gulp.src([
        'public/assets/scripts/main.js'
    ])
        .pipe($.newer('.tmp/scripts'))
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('.tmp/public/assets/scripts'))
        .pipe($.concat('main.min.js'))
        .pipe($.uglify({preserveComments: 'some'}))
        // Output files
        .pipe($.size({title: 'scripts'}))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/public/assets/scripts'))
        .pipe(gulp.dest('.tmp/public/assets/scripts'))
);

// Scan your HTML for assets & optimize them
gulp.task('html', () => {
    return gulp.src(['!node_modules/**/*', './**/*.html'])
        .pipe($.useref({
            searchPath: '{.tmp,./}',
            noAssets: true
        }))

        // Minify any HTML
        .pipe($.if('*.html', $.htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeOptionalTags: true
        })))
        // Output files
        .pipe($.if('*.html', $.size({title: 'html', showFiles: true})))
        .pipe(gulp.dest('dist'));
});

// Clean output directory
gulp.task('clean', ['clean-ng-scripts'], () => del(['.tmp', 'dist', '!dist/.git'], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['scripts', 'styles'], () => {
    browserSync({
        notify: false,
        // Customize the Browsersync console logging prefix
        logPrefix: 'WSK',
        // Allow scroll syncing across breakpoints
        scrollElementMapping: ['main', '.mdl-layout'],
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: ['./', '.tmp'],
        port: 3000
    });

    gulp.watch(['./**/*.html'], reload);
    gulp.watch(['public/assets/styles/**/*.{scss,css}'], ['styles', reload]);
    gulp.watch(['public/assets/scripts/**/*.js'], ['lint', 'scripts', reload]);
    gulp.watch(['public/assets/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], () =>
    browserSync({
        notify: false,
        logPrefix: 'WSK',
        // Allow scroll syncing across breakpoints
        scrollElementMapping: ['main', '.mdl-layout'],
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: 'dist',
        port: 3001
    })
);

// Build production files, the default task
gulp.task('default', ['clean'], cb =>
    runSequence(
        'styles',
        ['lint', 'html', 'scripts', 'images', 'copy', 'ng-app', 'sass'],
        'copy-ng-scripts',
        cb
    )
);

// Run PageSpeed Insights
gulp.task('pagespeed', cb =>
    // Update the below URL to the public URL of your site
    pagespeed('example.com', {
        strategy: 'mobile'
        // By default we use the PageSpeed Insights free (no API key) tier.
        // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
        // key: 'YOUR_API_KEY'
    }, cb)
);

// Copy over the scripts that are used in importScripts as part of the generate-service-worker task.
gulp.task('copy-sw-scripts', () => {
    return gulp.src(['node_modules/sw-toolbox/sw-toolbox.js', 'app/scripts/sw/runtime-caching.js'])
        .pipe(gulp.dest('dist/scripts/sw'));
});


gulp.task('copy-ng-scripts', () => {
    gulp.src('node_modules/systemjs/dist/**/*.js').pipe(gulp.dest('dist/node_modules/systemjs/dist'));
    gulp.src('node_modules/@angular/**/*.{js,css,scss}').pipe(gulp.dest('dist/node_modules/@angular'));
    gulp.src('node_modules/rxjs/**/*.js').pipe(gulp.dest('dist/node_modules/rxjs'));
    gulp.src('node_modules/ng2-scroll-to/**/*.js').pipe(gulp.dest('dist/node_modules/ng2-scroll-to'));
    gulp.src('node_modules/reflect-metadata/**/*.js').pipe(gulp.dest('dist/node_modules/reflect-metadata'));
    gulp.src('node_modules/core-js/**/*.js').pipe(gulp.dest('dist/node_modules/core-js'));
    gulp.src('node_modules/zone.js/dist/**/*.js').pipe(gulp.dest('dist/node_modules/zone.js/dist'));
    gulp.src('node_modules/hammerjs/**/*.js').pipe(gulp.dest('dist/node_modules/hammerjs'));
    gulp.src('node_modules/ng2-bootstrap/**/*.{js,css}').pipe(gulp.dest('dist/node_modules/ng2-bootstrap'));
    gulp.src('node_modules/ngx-bootstrap/**/*.{js,css}').pipe(gulp.dest('dist/node_modules/ngx-bootstrap'));
    gulp.src('node_modules/angular2-fontawesome/**/*.{js,css}').pipe(gulp.dest('dist/node_modules/angular2-fontawesome'));
    gulp.src('node_modules/bootstrap/dist/**/*.{js,css}').pipe(gulp.dest('dist/node_modules/bootstrap/dist'));
    gulp.src('node_modules/jquery/dist/**/*.{js,css}').pipe(gulp.dest('dist/node_modules/jquery/dist'));
    gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*.*')
        .pipe(gulp.dest('dist/node_modules/bootstrap-sass/assets/fonts/bootstrap'))
        .pipe(gulp.dest('dist/public/assets/fonts/bootstrap'))
        .pipe(gulp.dest('public/assets/fonts/bootstrap'));
    gulp.src('node_modules/font-awesome/fonts/**/*.*')
        .pipe(gulp.dest('dist/node_modules/font-awesome/fonts'))
        .pipe(gulp.dest('dist/public/assets/fonts/font-awesome'))
        .pipe(gulp.dest('public/assets/fonts/font-awesome'));
});

gulp.task('clean-ng-scripts', () => {
    del([
        //     'app/scripts/systemjs',
        //     'app/scripts/@angular',
        //     'app/scripts/rxjs',
        //     'app/scripts/reflect-metadata',
        //     'app/scripts/core-js',
        //     'app/scripts/zone',
        //     'app/scripts/hammerjs',
        //     'app/scripts/ng2-bootstrap',
        'public/assets/fonts/bootstrap',
        'public/assets/fonts/font-awesome',
        'dist/public/assets/fonts/bootstrap',
        'dist/public/assets/fonts/font-awesome'], {dot: true})
});


// Load custom tasks from the `tasks` directory
// Run: `npm install --save-dev require-dir` from the command-line
// try { require('require-dir')('tasks'); } catch (err) { console.error(err); }
