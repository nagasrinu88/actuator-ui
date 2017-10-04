/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdDatepickerModule} from '@angular/material';
import {CustomerService} from '../../services/customer.service';
import {Hero} from '../../hero';

@Component({
    selector: 'my-heroes',
    templateUrl: 'my-heroes.component.html',
    providers: [CustomerService]
})

export class HeroesComponent {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private customerService: CustomerService) {
        console.log(this.customerService);

    }

    ngOnInit(): void {
        this.customerService.getCustomers().then(heroes => {
            this.heroes = heroes;
        });
    }

    selectHero(hero: Hero): void {
        this.selectedHero = hero;
    }

}

