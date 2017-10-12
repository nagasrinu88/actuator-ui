/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component, Input, ViewChild, SimpleChanges} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts/ng2-charts';

import {ChartData} from '../../models';

@Component({
    selector: 'my-chart',
    templateUrl: 'chart.component.html'
})

export class ChartComponent {
    
    @Input('chartData') chartData: ChartData;
    @Input('chartTitle') chartTitle: string;

    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    public lineChartOptions: any = {
        responsive: true,
        title: {
            display: true,
            text: this.chartTitle
        }
    };

    @ViewChild(BaseChartDirective) private chart: BaseChartDirective;

    

    OnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    ngOnInit(): void {
        this.lineChartOptions.title.text = this.chartTitle;
        
        this.chartData.subscribe().subscribe(() => {
            this.update();
        });
    }

    public update(): void {
        this.chart.chart.update();
    }

    // events
    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}

