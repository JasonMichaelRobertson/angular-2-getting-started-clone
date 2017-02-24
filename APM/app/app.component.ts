
// this imports the component function from Angular Core
import {Component, OnInit} from '@angular/core'; 

// import {ProductService} from './products/product.service'; could leave this here if it was common to other components

// selector pm for priduct management - App name of the component any valid html can be used in the template
@Component({    
    selector : 'pm-app',
    template:`<div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>`
  //  providers: [ProductService] // Register Provider Service in app.component the root app component available to all components, component metadata - could leave here
})

// creates the class export makes it public
export class AppComponent {    
    pageTitle: string = 'ComSys.Co Angular 2 Website - Jason Robertson';
    currentYear: string;

    ngOnInit(): void {
        this.currentYear = new Date().getFullYear().toString();
    }
}
