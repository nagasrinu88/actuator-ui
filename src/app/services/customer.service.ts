/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';

import {Hero} from '../hero';

@Injectable()
export class CustomerService {
    getCustomers(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {id: 11, name: 'Mr. Nice'},
                    {id: 12, name: 'Narco'},
                    {id: 13, name: 'Bombasto'},
                    {id: 14, name: 'Celeritas'},
                    {id: 15, name: 'Magneta'},
                    {id: 16, name: 'RubberMan'},
                    {id: 17, name: 'Dynama'},
                    {id: 18, name: 'Dr IQ'},
                    {id: 19, name: 'Magma'},
                    {id: 20, name: 'Tornado'}
                ]);
            }, 500);
        });
    }
    getCustomer(id: number): Promise<Hero> {
        return new Promise(resolve => {
            resolve({id: id, name: 'Dummy'});
        });
    }
}