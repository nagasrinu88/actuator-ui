/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component} from '@angular/core';
import {Profile} from './profile'

@Component({
    selector: 'ion-profile-form',
    template: `
    <h1>Hero Form</h1>
    <form (ngSubmit)="onSubmit()" #profileForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" [(ngModel)]="profile.name" required>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="number" class="form-control" name="age" [(ngModel)]="profile.age" required>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="gender" [(ngModel)]="profile.gender" required>
      </div> 
      <button type="submit" class="btn btn-success">Submit</button>
 
    </form>
    `
})

export class ProfileFormComponent {
    profile: Profile;

    ngOnInit(): void {
        this.profile = new Profile("Naga", 22, "Male");
        console.log(this.profile);
    }

    onSubmit() {
        console.log(this.profile);
    }
}

