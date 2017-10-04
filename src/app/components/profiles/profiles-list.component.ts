/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component, Input} from '@angular/core';
import {Profile} from './profile'
import {ProfileService} from 'app/services/profile.service';

@Component({
    selector: 'ion-profiles-list',
    template: `
        <h2>Profiles</h2>
        <ion-profile *ngFor="let profile of profiles" 
        [profile]='profile' (onSelect)="profileSelected($event)"></ion-profile>
    `,
    providers: [ProfileService]
})

export class ProfilesListComponent {
    @Input() profiles: Profile[];

    constructor(private profileService: ProfileService) {
    }

    ngOnInit(): void {
        this.profileService.findAll().then(profiles => {
            console.log(profiles);
            this.profiles = profiles;
        });
    }

    profileSelected(profile: Profile) {
        console.log("Selected Profile From Profile List");
        console.log(profile);
    }
}

