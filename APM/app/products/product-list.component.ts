import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

// component decorator - provider already registers
@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html', // template view 
    styleUrls: ['product-list.component.css']  // template style
})

// class
export class ProductListComponent implements OnInit {  

    pageTitle: string = 'JRs Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    message: string;
    errorMessage: string;
   
    products: IProduct[];

    constructor(private _productService: ProductService) {
        
    }

    // method listens to Event
    toggleImage(): void {
        this.showImage = !this.showImage;
    }    

    ngOnInit(): void {
        this._productService.getProducts().subscribe(products => this.products = products, error => this.errorMessage = <any>error);
        // console.log('In OnInit');
    }

    onRatingClicked(event : string): void {
        this.pageTitle = 'Product List: ' + event;
    }
}