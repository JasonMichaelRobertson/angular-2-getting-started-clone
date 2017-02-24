//****
// Jason Robertson 
//
// Products Feature Module - Re Use
//
// Module imports
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'; // registers router service provider and declares the router directives 

import { SharedModule } from '../shared/shared.module';

// Component imports 
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductFilterPipe } from './product-filter.pipe'; // custom display
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe       
    ],
    imports: [      
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id',
                canActivate: [ProductDetailGuard],
                component: ProductDetailComponent
            } // route paramete repeat with another colon :/placeholder for more link parameters
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard        
    ], // because this is a custom provider
    
})

export class ProductModule { }