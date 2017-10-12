/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Observable,Observer} from 'rxjs';

export class ChartData {
    public data: Array<any> = [];
    public labels: Array<any> = [];
    private maxPoints: number = 25;

    private observable: Observable<void>;
    private observer: Observer<void>;

    constructor() {
        this.observable = Observable.create(observer => {
            this.observer = observer;
        });
    }

    public addDataPoint(label: any, row: Array<any>): void {
        let flag = this.maxPoints != -1 && this.labels.length > this.maxPoints;
        this.labels.push(label);
        if (flag) {
            this.labels.splice(0, 1);
        }

        this.data.forEach((i, j) => {
            i.data.push(row[j]);
            if (flag) {
                i.data.splice(0, 1);
            }
        });
    }

    public refresh(): void {
        if (this.observer) {
            this.observer.next(null);
        }
    }

    public subscribe(): Observable<void> {
        return this.observable;
    }
}

