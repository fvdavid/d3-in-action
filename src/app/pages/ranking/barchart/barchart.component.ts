import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-barchart',
    imports: [FluidModule],
    templateUrl: './barchart.component.html',
    styleUrl: './barchart.component.scss'
})
export class BarchartComponent implements OnInit {
    // set the dimensions and margins of the graph
    margin = { top: 30, right: 30, bottom: 70, left: 60 };
    width = 460 - this.margin.left - this.margin.right;
    height = 400 - this.margin.top - this.margin.bottom;

    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.csv('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/onecat_onenum.csv').then((d: any) => {
            d.sort((a: any, b: any) => a.Value - b.Value);

            this.createSvg(d);
        });
    }

    createSvg(data: any) {
        // append the svg object to the body of the page
        this.svg = d3
            .select('figure#barchart')
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        // X axis
        const x = d3
            .scaleBand()
            .range([0, this.width])
            .domain(
                data.map(function (d: any) {
                    return d.Country;
                })
            )
            .padding(0.2);
        this.svg.append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('transform', 'translate(-10,0)rotate(-45)')
            .style('text-anchor', 'end');

        // Add Y axis
        const y = d3.scaleLinear().domain([0, 13000]).range([this.height, 0]);
        this.svg.append('g').call(d3.axisLeft(y));

        // Bars
        this.svg.selectAll('mybar')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', function (d: any) {
                return x(d.Country);
            })
            .attr('y', function (d: any) {
                return y(d.Value);
            })
            .attr('width', x.bandwidth())
            .attr('height',  (d: any) => {
                return this.height - y(d.Value);
            })
            .attr('fill', '#69b3a2');
    }
}
