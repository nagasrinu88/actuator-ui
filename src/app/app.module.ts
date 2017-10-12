import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MyAppMaterialModule} from './app.material.module';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
//import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdDatepickerModule,
    MdCardModule, MdListModule, MdSidenavModule, MdToolbarModule,
    MdTableModule
} from '@angular/material';

// Components
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ChartComponent} from './components/dashboard/chart.component';
//import {ProfileComponent} from './components/profiles/profile.component';
//import {ProfilesListComponent} from './components/profiles/profiles-list.component';
//import {ProfileFormComponent} from './components/profiles/profile-form.component';
import {ProfileComponent, ProfilesListComponent, ProfileFormComponent} from './components/profiles';
import {RegisteredBeansListPage, BeanViewComponent} from './components/beans';
import {ChartsModule} from 'ng2-charts';

// Services
import {CustomerService, ProfileService, AcutatorService, ApplicationService} from './services';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent, ChartComponent,
        RegisteredBeansListPage, BeanViewComponent,
        ProfileComponent, ProfilesListComponent, ProfileFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule,
        MdSidenavModule, MdToolbarModule,
        MdListModule, MdTableModule,
        FormsModule,
        HttpClientModule,
        ChartsModule,
        RouterModule.forRoot([{
            path: 'heroes',
            component: HeroesComponent
        }, {
            path: 'dashboard',
            component: DashboardComponent
        }, {
            path: 'heroes/:id',
            component: HeroDetailComponent
        }, {
            path: 'profiles',
            component: ProfilesListComponent
        }, {
            path: 'profile/new',
            component: ProfileFormComponent
        }, {
            path: 'registered-beans',
            component: RegisteredBeansListPage
        }])
    ],
    providers: [CustomerService, ProfileService, AcutatorService, ApplicationService],
    bootstrap: [AppComponent]
})

export class AppModule {}
