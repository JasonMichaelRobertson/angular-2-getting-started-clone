// imports Class name inside .ts file of Component ref its file name
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'; // registers router service provider and declares the router directives 


import { AppComponent }  from './app.component'; // root bootstrap component

import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailGuard } from './products/product-guard.service';
import { ProductFilterPipe } from './products/product-filter.pipe'; // custom display
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';

// Module Decorator this is a Function - like Component Decorator
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent}, // route paramete repeat with another colon :/placeholder for more link parameters
            { path: 'welcome', component: WelcomeComponent},
            { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // default route that redirects to home
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' },   // this redirects to Welcome - could be { path : '**', component : PageNotFoundComponent }                 
        ])
    ], // angular directives, components and pipes, 3rd parties, imports array
    declarations: [
        AppComponent,
        WelcomeComponent,
        ProductListComponent,
        ProductFilterPipe,
        StarComponent,
        ProductDetailComponent
    ], // our directives, components and pipes
    providers: [ProductDetailGuard], // because this is a custom provider
    bootstrap: [ AppComponent ]
})
export class AppModule { }
