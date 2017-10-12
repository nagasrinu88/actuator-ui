/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';

import {ApplicationData} from '../models'

@Injectable()
export class ApplicationService {
    private _activeApplication: ApplicationData;

    constructor() {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("Creating ApplicationService Instance");
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    }

    set activeApplication(app: ApplicationData) {
        this._activeApplication = app;
    }

    get activeApplication(): ApplicationData {
        return this._activeApplication;
    }


}

