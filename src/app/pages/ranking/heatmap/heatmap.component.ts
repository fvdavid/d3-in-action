import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-heatmap',
    imports: [FluidModule],
    templateUrl: './heatmap.component.html',
    styleUrl: './heatmap.component.scss'
})
export class HeatmapComponent implements OnInit {
    margin = { top: 30, right: 30, bottom: 30, left: 30 };
    width = 450 - this.margin.left - this.margin.right;
    height = 450 - this.margin.top - this.margin.bottom;

    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.csv('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/heatmap_data.csv').then((d: any) => {
            d.sort((a: any, b: any) => a.Value - b.Value);
            this.createSvg(d);
        });
    }

    createSvg(data: any) {
        // append the svg object to the body of the page
        this.svg = d3
            .select('figure#heatmap')
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        // Labels of row and columns
        const myGroups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        const myVars = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9', 'v10'];

        // Build X scales and axis:
        const x = d3.scaleBand().range([0, this.width]).domain(myGroups).padding(0.01);
        this.svg
            .append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3.axisBottom(x));

        // Build X scales and axis:
        const y = d3.scaleBand().range([this.height, 0]).domain(myVars).padding(0.01);
        this.svg.append('g').call(d3.axisLeft(y));

        // Build color scale
        // const myColor = d3.scaleLinear().range(['white', '#69b3a2']).domain([1, 100]);
        const myColor =
            // d3.scaleLinear().range(['white', '#69b3a2']).domain([1, 100]);
            d3.scaleLinear([1, 100], ['#10b981', '#abe9d5']);

        this.svg
            .selectAll()
            .data(data, function (d: any) {
                return d.group + ':' + d.variable;
            })
            .enter()
            .append('rect')
            .attr('x', function (d: any) {
                return x(d.group);
            })
            .attr('y', function (d: any) {
                return y(d.variable);
            })
            .attr('width', x.bandwidth())
            .attr('height', y.bandwidth())
            .style('fill', function (d: any) {
                return myColor(d.value);
            });
    }
}
