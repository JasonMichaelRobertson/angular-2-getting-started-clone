import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule], // angular directives, components and pipes, 3rd parties
  declarations: [AppComponent, ProductListComponent, ProductFilterPipe ], // our directives, components and pipes
  bootstrap: [ AppComponent ]
})
export class AppModule { }
