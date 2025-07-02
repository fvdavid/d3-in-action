import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleChart, ChartType } from 'angular-google-charts';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-google-pie',
    imports: [GoogleChart, FluidModule],
    templateUrl: './google-pie.component.html',
    styleUrl: './google-pie.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GooglePieComponent {

    chartType: ChartType = ChartType.PieChart;

    pieChartData = [
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ];

    pieChartColumns = ['Task', 'Hours per Day'];

    pieChartOptions = {
        title: 'My Daily Activities',
        pieHole: 0.4
    };
}
