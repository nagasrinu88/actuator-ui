/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component, Input} from '@angular/core';
import {AcutatorService} from 'app/services';

@Component({
    selector: 'my-beans-list-page',
    template: `
        <h2>Registered Beans</h2>
        <table class="table table-stripped table-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Scope</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let bean of beans">
            <td><a href="">{{bean.bean}}</a></td>
            <td>{{bean.scope}}</td>
            <td>{{bean.type}}</td>
            </tr>
            </tbody>
        </table>
    `,
    providers: [AcutatorService]
})

export class RegisteredBeansListPage {
    beans: any[];

    constructor(private acutatorService: AcutatorService) {
    }

    ngOnInit(): void {
        this.acutatorService.loadBeans().then(response => {
            console.log(response);
            this.beans = response[0].beans;
        });
    }
}

