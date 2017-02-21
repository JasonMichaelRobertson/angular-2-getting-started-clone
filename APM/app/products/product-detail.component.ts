import { Component, OnInit } from '@angular/core'; // OnInit Life Cycle hook
import { ActivatedRoute, Router } from '@angular/router'; // read parameters or url route

import { IProduct } from './products';


@Component({  
    templateUrl : 'app/products/product-detail.component.html'  
})


export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute, private _router: Router) {        
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`  // template back ticks to display Id
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}