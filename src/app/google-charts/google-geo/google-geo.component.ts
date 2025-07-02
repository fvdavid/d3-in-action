import { Component } from '@angular/core';
import { GoogleChart, ChartType } from 'angular-google-charts';

@Component({
    selector: 'app-google-geo',
    standalone: true,
    imports: [GoogleChart],
    templateUrl: './google-geo.component.html',
    styleUrl: './google-geo.component.scss'
})
export class GoogleGeoComponent {
    chartType: ChartType = ChartType.GeoChart;

    // Data for the GeoChart
    geoChartData = [
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ];

    // Columns for the GeoChart
    geoChartColumns = ['Country', 'Popularity'];

    // Options for the GeoChart
    geoChartOptions = {
        title: 'Country Popularity',
        colorAxis: { colors: ['#e0f7fa', '#00796b'] }, // Example color scheme
        backgroundColor: '#f8f9fa',
        datalessRegionColor: '#d1d1d1'
    };
}
