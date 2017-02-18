// imports Class name inside .ts file of Component ref its file name
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

// Module Decorator this is a Function - like Component Decorator
@NgModule({
  imports: [BrowserModule, FormsModule], // angular directives, components and pipes, 3rd parties
  declarations: [AppComponent, ProductListComponent, ProductFilterPipe, StarComponent ], // our directives, components and pipes
  bootstrap: [ AppComponent ]
})
export class AppModule { }
