/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule],
    exports: [MdButtonModule, MdCheckboxModule]
})

export class MyAppMaterialModule {

}

