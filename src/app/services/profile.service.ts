/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) {

    }

    findAll(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.http.get<any[]>('http://localhost:8080/profiles').subscribe(data => {
                // Read the result field from the JSON response.
                console.log(data);
                resolve(data);
//                resolve([
//                    {name: 'Naga', age: 29, gender: 'Male'},
//                    {name: 'Srinu'},
//                    {name: 'Kiran'}
//                ]);
            });
            
        });
    }
}

