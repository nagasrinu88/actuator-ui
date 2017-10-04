/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Profile {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

