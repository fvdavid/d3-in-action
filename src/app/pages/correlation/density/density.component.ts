import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-density',
    imports: [FluidModule],
    templateUrl: './density.component.html',
    styleUrl: './density.component.scss'
})
export class DensityComponent implements OnInit {
    // set the dimensions and margins of the graph
    margin = { top: 10, right: 30, bottom: 30, left: 40 };
    width = 460 - this.margin.left - this.margin.right;
    height = 400 - this.margin.top - this.margin.bottom;

    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.csv('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/data_for_density2d.csv').then((d: any) => {
            this.createSvg(d);
        });
    }

    createSvg(data: any) {
        // append the svg object to the body of the page
        this.svg = d3
            .select('figure#density')
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        // Add X axis
        const x = d3
            .scaleLinear()
            .domain([5, 20])
            .range([this.margin.left, this.width - this.margin.right]);
        this.svg
            .append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3.axisBottom(x));

        // Add Y axis
        const y = d3
            .scaleLinear()
            .domain([5, 25])
            .range([this.height - this.margin.bottom, this.margin.top]);
        this.svg.append('g').call(d3.axisLeft(y));

        // Prepare a color palette
        // const color = d3
        //     .scaleLinear()
        //     .domain([0, 1]) // Points per square pixel.
        //     .range(['white', '#69b3a2']);

            const color = d3.scaleLinear([0, 1], ["white", "#69b3a2"]);

        // compute the density data
        const densityData = d3
            .contourDensity()
            .x(function (d: any) {
                return x(d.x);
            })
            .y(function (d: any) {
                return y(d.y);
            })
            .size([this.width, this.height])
            .bandwidth(20)(data);

        // show the shape!
        this.svg
            .insert('g', 'g')
            .selectAll('path')
            .data(densityData)
            .enter()
            .append('path')
            .attr('d', d3.geoPath())
            .attr('fill', function (d: any) {
                return color(d.value);
            });
    }
}
