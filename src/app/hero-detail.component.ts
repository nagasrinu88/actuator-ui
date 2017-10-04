/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Hero} from './hero';
import {CustomerService} from './services/customer.service';


@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <form class="example-form">
        <md-form-field>
            <input mdInput placeholder="Name" [(ngModel)]="hero.name" name="name" >
        </md-form-field>    
      </form>      
      <button (click)="goBack()">Back</button>
    </div>
  `
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    constructor(private customerService: CustomerService,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.customerService.getCustomer(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}
