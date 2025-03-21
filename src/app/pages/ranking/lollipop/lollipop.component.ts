import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-lollipop',
    imports: [FluidModule],
    templateUrl: './lollipop.component.html',
    styleUrl: './lollipop.component.scss'
})
export class LollipopComponent implements OnInit {
    // set the dimensions and margins of the graph
    margin = { top: 10, right: 30, bottom: 90, left: 40 };
    width = 460 - this.margin.left - this.margin.right;
    height = 500 - this.margin.top - this.margin.bottom;

    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.csv('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/onecat_onenum.csv').then((d: any) => {
            this.createSvg(d);
        });
    }

    createSvg(data: any) {
        // append the svg object to the body of the page
        this.svg = d3
            .select('figure#lollipop')
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        // X axis
        var x = d3
            .scaleBand()
            .range([0, this.width])
            .domain(
                data.map(function (d: any) {
                    return d.Country;
                })
            )
            .padding(1);
        this.svg
            .append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('transform', 'translate(-10,0)rotate(-45)')
            .style('text-anchor', 'end');

        // Add Y axis
        var y = d3.scaleLinear().domain([0, 13000]).range([this.height, 0]);
        this.svg.append('g').call(d3.axisLeft(y));

        // Lines
        this.svg
            .selectAll('myline')
            .data(data)
            .enter()
            .append('line')
            .attr('x1', function (d: any) {
                return x(d.Country);
            })
            .attr('x2', function (d: any) {
                return x(d.Country);
            })
            .attr('y1', function (d: any) {
                return y(d.Value);
            })
            .attr('y2', y(0))
            .attr('stroke', 'grey');

        // Circles
        this.svg
            .selectAll('mycircle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', function (d: any) {
                return x(d.Country);
            })
            .attr('cy', function (d: any) {
                return y(d.Value);
            })
            .attr('r', '4')
            .style('fill', '#69b3a2')
            .attr('stroke', 'black');
    }
}
