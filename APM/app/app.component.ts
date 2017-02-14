
// this imports the component function from Angular Core
import {Component} from '@angular/core'; 

// selector pm for priduct management - App name of the component any valid html can be used in the template
@Component({
    selector: 'pm-app',
    template:`<div><h1>{{pageTitle}}</h1><div>My First Component in Angular 2 yee ha</div>
              <pm-products></pm-products></div>`
})

// creates the class export makes it public
export class AppComponent {
    pageTitle:string = 'Jasons Angular 2 Website Web App'
}