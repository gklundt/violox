(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: "app",
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'hammerjs': 'npm:hammerjs',
            'ng2-bootstrap': 'npm:ng2-bootstrap/',
            'angular2-fontawesome': 'node_modules/angular2-fontawesome',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-scroll-to':'npm:ng2-scroll-to'
//            'moment': 'npm:moment',
//             'emailjs': 'npm:emailjs',
//             'addressparser':'npm:addressparser',
//             'emailjs/smtp': 'npm:emailjs/smtp',
//             'mimelib':'npm:mimelib',
//             'starttls':'npm:starttls',
//             'bufferjs':'npm:bufferjs',
//             'stream':'npm:stream',
//             'util':'npm:util',
//             'fs':'npm:fs',
//             'path':'npm:path',
//             'os':'npm:os',
//             'net':'npm:net',
//             'crypto':'npm:crypto',
//             'tls':'npm:tls',
//             'events':'npm:events',

            // 'ts': 'npm:plugin-typescript/lib/plugin.js',
            // 'typescript': 'npm:typescript/lib/typescript.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'main.js',
                defaultExtension: 'js'
            },
            rxjs: {defaultExtension: 'js'},
            'ng2-bootstrap': {format: 'cjs', main: 'bundles/ngx-bootstrap.umd.js', defaultExtension: 'js'},
            'angular2-fontawesome': {defaultExtension: 'js'},
            'ng2-scroll-to':{main: 'index.js', defaultExtension: 'js'}
            // emailjs: {main: 'email.js', defaultExtension: 'js'},
            // moment: {main:'moment.js', defaultExtension: 'js'},
            // addressparser: {main:'lib/addressparser.js', defaultExtension: 'js'},
            // mimelib: {main:'index.js', defaultExtension: 'js'},
            // starttls: {main:'lib/starttls.js', defaultExtension: 'js'},
            // bufferjs:{main:'index.js', defaultExtension:'js'},
            // stream:{main:'index.js', defaultExtension:'js'},
            // util:{main:'util.js', defaultExtension:'js'},
            // path:{main:'path.js', defaultExtension:'js'},
            // os:{main:'index.js', defaultExtension:'js'},
            // net:{main:'index.js', defaultExtension:'js'},
            // events:{main:'events.js', defaultExtension:'js'},

        }
    });

})(this);
//# sourceMappingURL=systemjs.config.js.map
