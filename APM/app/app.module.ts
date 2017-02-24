// imports Class name inside .ts file of Component ref its file name
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'; // registers router service provider and declares the router directives 

import { AppComponent }  from './app.component'; // root bootstrap component
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module'; // declare here in App Module or nothing will load
 
// Module Decorator this is a Function - like Component Decorator
@NgModule({
    imports: [
        BrowserModule,      // module browser applications need ngIf ngFor directives, service providers common module, exports,  html UI directives
        HttpModule,         // Services @NgService
        RouterModule.forRoot([          
            { path: 'welcome', component: WelcomeComponent},
            { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // default route that redirects to home
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' },   // this redirects to Welcome - could be { path : '**', component : PageNotFoundComponent }                 
        ]),
        ProductModule
    ], // angular directives, components and pipes, 3rd parties, imports array
    declarations: [
        AppComponent,
        WelcomeComponent             
    ], // our directives, components and pipes    
    bootstrap: [AppComponent]
    
    //providers: [
    //    ProductDetailGuard  
    //], 
})
export class AppModule { }
