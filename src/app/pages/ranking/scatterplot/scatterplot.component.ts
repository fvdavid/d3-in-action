import { FluidModule } from 'primeng/fluid';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-scatterplot',
    imports: [FluidModule],
    templateUrl: './scatterplot.component.html',
    styleUrl: './scatterplot.component.scss'
})
export class ScatterplotComponent implements OnInit {
    margin = { top: 10, right: 30, bottom: 30, left: 60 };
    width = 460 - this.margin.left - this.margin.right;
    height = 400 - this.margin.top - this.margin.bottom;

    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.csv('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/two-num.csv').then((d: any) => {
            d.sort((a: any, b: any) => a.Value - b.Value);

            this.createSvg(d);
        });
    }

    createSvg(data: any) {
        this.svg = d3
            .select('figure#scatterplot')
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        // Add X axis
        const x = d3.scaleLinear().domain([0, 4000]).range([0, this.width]);
        this.svg
            .append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3.axisBottom(x));

        // Add Y axis
        const y = d3.scaleLinear().domain([0, 500000]).range([this.height, 0]);
        this.svg.append('g').call(d3.axisLeft(y));

        // Add dots
        this.svg
            .append('g')
            .selectAll('dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', function (d: any) {
                return x(d.GrLivArea);
            })
            .attr('cy', function (d: any) {
                return y(d.SalePrice);
            })
            .attr('r', 1.5)
            .style('fill', '#69b3a2');
    }
}
