// JIT - Just in time compiles in the Browser
// main entry point - angular compile - compiles in browser dynamically
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// where loaded can find applications angular module to load it no extensions but in systemjs.config.js says its js and maps locations of dir's and files
import { AppModule } from './app.module';
// load angular module
platformBrowserDynamic().bootstrapModule(AppModule);


// AoT - Ahead of time compiling compiled before the browser, on orthe other newver both

//import { platformBrowser } from '@angular/platform-browser';

// where loaded can find applications angular module to load it no extensions but in systemjs.config.js says its js and maps locations of dir's and files
//import { AppModuleNgFactory } from './app.module.ngfactory';
// load angular module
//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);