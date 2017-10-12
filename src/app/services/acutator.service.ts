/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ApplicationService} from './application.service';

@Injectable()
export class AcutatorService {

    constructor(private http: HttpClient,
        private applicationService: ApplicationService) {
    }


    loadMetrics(): Promise<object> {
        return new Promise((resolve, reject) => {
            this.http.get<any[]>(this.applicationService.activeApplication.appUrl + '/metrics').subscribe(data => {
                resolve(data);
            });

        });
    }

    loadBeans(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.http.get<any[]>(this.applicationService.activeApplication.appUrl + '/beans').subscribe(data => {
                resolve(data);
            });

        });
    }
}

