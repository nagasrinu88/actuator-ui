/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';


import {AcutatorService, ApplicationService} from '../../services';

import {Observable, Subscription} from 'rxjs';

import {ChartData, ApplicationData} from '../../models'

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [AcutatorService, ApplicationService, DatePipe]
})

export class DashboardComponent {
    public heapChartData: ChartData = new ChartData();
    public nonHeapChartData: ChartData = new ChartData();
    public memChartData: ChartData = new ChartData();
    public systemInfo: any = {};
    public threadsInfo: any = {};
    public applicationInfo: any = {};

    private subscription: Subscription;

    constructor(private metricsService: AcutatorService,
        private applicationService: ApplicationService,
        private datePipe: DatePipe) {
    }

    ngOnInit(): void {
        this.applicationService.activeApplication = new ApplicationData('Product Service','http://localhost:8080/ion-subscriptions/');
        
        this.heapChartData.data = [
            {data: [], label: 'Initilized'},
            {data: [], label: 'Used'},
            {data: [], label: 'Committed'},
            {data: [], label: 'Heap'}
        ];
        this.nonHeapChartData.data = [
            {data: [], label: 'Committed'},
            {data: [], label: 'Used'}
        ];
        this.memChartData.data = [
            {data: [], label: 'Total'},
            {data: [], label: 'Used'}
        ];
        this.applicationInfo.session = {};
        this.applicationInfo.classes = {};

        this.subscription = Observable.timer(3000, 10 * 1000).subscribe(x => {


            this.metricsService.loadMetrics().then(response => {
                this.systemInfo.processors = response['processors'];
                this.systemInfo.uptime = this.datePipe.transform(response['instance.uptime'], 'HH:MM:ss');

                this.threadsInfo.totalStarted = response['threads.totalStarted'];
                this.threadsInfo.live = response['threads'];
                this.threadsInfo.daemon = response['threads.daemon'];


                this.applicationInfo.classes.total = response['classes'];
                this.applicationInfo.classes.loaded = response['classes.loaded'];
                this.applicationInfo.classes.unloaded = response['classes.unloaded'];
                this.applicationInfo.session.live = response['httpsessions.active'];
                this.applicationInfo.session.maxTimeout = response['httpsessions.max'];

                let label = this.datePipe.transform(new Date(), 'HH:MM:ss');
                this.heapChartData.addDataPoint(label, [response['heap.init'] / 1024,
                response['heap.used'] / 1024, response['heap.committed'] / 1024,
                response['heap'] / 1024]);
                this.heapChartData.refresh();

                this.nonHeapChartData.addDataPoint(label, [response['nonheap.committed'] / 1024,
                response['nonheap.used'] / 1024]);
                this.nonHeapChartData.refresh();

                this.memChartData.addDataPoint(label, [response['mem'] / 1024,
                (response['mem'] - response['mem.free']) / 1024]);
                //console.log(this.lineChartData);
                this.memChartData.refresh();
            });
        });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        console.log("Destroying the Dashboard Component");
    }
}

