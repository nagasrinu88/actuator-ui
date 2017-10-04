/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Profile} from './profile'
@Component({
    selector: 'ion-profile',
    template: `
    Name: {{profile.name}} | 
    Gender: {{profile.gender}} | 
    Age: {{profile.age}}
    <button (click)="select()" class="btn btn-primary btn-sm">Select</button>
    <div style='clear:both;'></div>
    `, styleUrls: ['style.scss']
})
export class ProfileComponent {
    @Input() profile: Profile;
    @Output() onSelect = new EventEmitter<Profile>();

    select() {
        this.onSelect.emit(this.profile);
    }
}

