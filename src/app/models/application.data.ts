/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class ApplicationData {
    private _appName: string;
    private _appUrl: string;
    private _appInfo: any = {};

    constructor(appName: string, appUrl: string) {
        this._appName = appName;
        this._appUrl = appUrl;
    }

    get appName(): string {
        return this._appName;
    }
    get appUrl(): string {
        return this._appUrl;
    }
    get appInfo(): any {
        return this._appInfo;
    }
}