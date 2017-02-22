import { Component, OnInit, OnDestroy } from '@angular/core'; // OnInit Life Cycle hook 
import { ActivatedRoute, Router } from '@angular/router'; // read parameters or url route

import { Subscription } from 'rxjs/Subscription'; // Angular reactive extension to subscribe to events

import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({  
    templateUrl : 'app/products/product-detail.component.html'  
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string; 
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) {        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    // at component start up load data initiate component
    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.pageTitle += `: ${id}`;  // template back ticks to display Id
                this.getProduct(id);
            });
    } 

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error)
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }

}