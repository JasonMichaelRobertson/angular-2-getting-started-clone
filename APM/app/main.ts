// main entry point - angular compile - compiles in browser dynamically
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// where loaded can find applications angular module to load it no extensions but in systemjs.config.js says its js and maps locations of dir's and files
import { AppModule } from './app.module';
// load angular module
platformBrowserDynamic().bootstrapModule(AppModule);
