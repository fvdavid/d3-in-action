import { Component, OnInit } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import * as d3 from 'd3';

@Component({
    selector: 'app-bubble',
    imports: [FluidModule],
    templateUrl: './bubble.component.html',
    styleUrl: './bubble.component.scss'
})
export class BubbleComponent implements OnInit {
    margin = { top: 10, right: 20, bottom: 30, left: 50 };
    width = 500 - this.margin.left - this.margin.right;
    height = 420 - this.margin.top - this.margin.bottom;

    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.csv('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/three_num.csv').then((d: any) => {
            this.createSvg(d);
        });
    }

    createSvg(data: any) {
        // append the svg object to the body of the page
        this.svg = d3
            .select('figure#bubble')
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        // Add X axis
        const x = d3.scaleLinear().domain([0, 10000]).range([0, this.width]);
        this.svg
            .append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3.axisBottom(x));

        // Add Y axis
        const y = d3.scaleLinear().domain([35, 90]).range([this.height, 0]);
        this.svg.append('g').call(d3.axisLeft(y));

        // Add a scale for bubble size
        const z = d3.scaleLinear().domain([200000, 1310000000]).range([1, 40]);

        // Add dots
        this.svg
            .append('g')
            .selectAll('dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', function (d: any) {
                return x(d.gdpPercap);
            })
            .attr('cy', function (d: any) {
                return y(d.lifeExp);
            })
            .attr('r', function (d: any) {
                return z(d.pop);
            })
            .style('fill', '#69b3a2')
            .style('opacity', '0.7')
            .attr('stroke', 'black');
    }
}
