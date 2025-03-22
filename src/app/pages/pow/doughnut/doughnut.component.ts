import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-doughnut',
    imports: [FluidModule],
    templateUrl: './doughnut.component.html',
    styleUrl: './doughnut.component.scss'
})
export class DoughnutComponent implements OnInit {
    // set the dimensions and margins of the graph
    width = 450;
    height = 450;
    margin = 40;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    radius = Math.min(this.width, this.height) / 2 - this.margin;

    svg: any;

    ngOnInit(): void {
        this.createSvg();
    }

    createSvg() {
        // append the svg object to the div called 'my_dataviz'
        this.svg = d3
            .select('figure#doughnut')
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');

        // Create dummy data
        const data = { a: 9, b: 20, c: 30, d: 8, e: 12 };
        const dataGrup = Object.entries(data).map(([key, value]) => ({ key, value }));

        // // set the color scale
        const color = d3
            .scaleOrdinal()
            .domain(dataGrup.map((o) => o.key))
            .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56']);

        const pie = d3.pie();
        const data_ready = pie(dataGrup.map((p) => p.value));

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        this.svg
            .selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
            .attr(
                'd',
                d3
                    .arc()
                    .innerRadius(100) // This is the size of the donut hole
                    .outerRadius(this.radius)
            )
            .attr('fill', function (d: any) {
                return color(d.value);
            })
            .attr('stroke', 'black')
            .style('stroke-width', '2px')
            .style('opacity', 0.7);
    }
}
