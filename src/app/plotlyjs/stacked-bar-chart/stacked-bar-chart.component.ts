import { Component } from '@angular/core';

@Component({
    selector: 'app-stacked-bar-chart',
    standalone: false,
    templateUrl: './stacked-bar-chart.component.html',
    styleUrl: './stacked-bar-chart.component.scss'
})
export class StackedBarChartComponent {
    data: any;

    constructor() {}

    ngOnInit(): void {
        const dataSeries1 = this.generateDataSeries(false);
        const dataSeries2 = this.generateDataSeries(false);

        const dataSeries3 = this.generateDataSeries(true);
        const dataSeries4 = this.generateDataSeries(true);

        const dataSeries3Modified = this.calculateNegativeRefrences(dataSeries3.y, dataSeries4.y);

        const dataSeries4Modified = this.calculateNegativeRefrences(dataSeries4.y, dataSeries3.y);

        const trace1 = {
            x: dataSeries1.x,
            y: dataSeries1.y,
            type: 'bar',
            name: 'Series 1'
        };

        const trace2 = {
            x: dataSeries2.x,
            y: dataSeries2.y,
            type: 'bar',
            name: 'Series 2'
        };

        const trace3 = {
            x: dataSeries3.x,
            y: dataSeries3Modified.map((item) => item.y),
            type: 'bar',
            name: 'Series 3',
            base: dataSeries3Modified.map((item) => item.base)
        };

        const trace4 = {
            x: dataSeries4.x,
            y: dataSeries4Modified.map((item) => item.y),
            type: 'bar',
            name: 'Series 4',
            base: dataSeries4Modified.map((item) => item.base)
        };

        // console.log(dataSeries3.y);
        // console.log(dataSeries4.y);
        // console.log(dataSeries3Modified);
        // console.log(dataSeries4Modified);

        this.data = [trace1, trace2, trace3, trace4];

        this.graph.data = this.data;
    }

    public graph = {
        data: [],
        layout: {
            barmode: 'stack',
            showlegend: true,
            autosize: true,
            hovermode: 'x unified',
            title: 'Test Plot'
        }
    };

    generateDataSeries = (isNegative: boolean) => {
        const numDataPoints = 10; // Number of data points
        const xValues = Array.from({ length: numDataPoints }, (_, i) => i);
        const yValues = xValues.map(() => (isNegative ? -Math.random() * 10 : Math.random() * 10));
        return { x: xValues, y: yValues };
    };

    calculateNegativeRefrences(arr1: number[], arr2: number[]): any[] {
        const differences = [];

        for (let i = 0; i < arr1.length; i++) {
            const val1 = arr1[i];
            const val2 = arr2[i];
            const y = val1 > val2 ? val1 - val2 : val1;
            const base = val1 > val2 ? val2 : 0;

            differences.push({ y: -y, base: base });
        }

        return differences;
    }
}
