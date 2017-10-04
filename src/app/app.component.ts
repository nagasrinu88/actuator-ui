import {Component} from '@angular/core';
import {CustomerService} from './services/customer.service'
import {Hero} from './hero';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CustomerService]
})
export class AppComponent {
    title = 'app works!';
    name = 'Angular First';

    constructor(private customerService: CustomerService) {
        console.log("In Constructor");

    }

    /**
     * Life Cycle methods
     * 
     */
    ngOnInit(): void {
        console.log("App Component is Initialized");
    }


    
}
