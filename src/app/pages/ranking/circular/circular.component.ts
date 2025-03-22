import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-circular',
    imports: [FluidModule],
    templateUrl: './circular.component.html',
    styleUrl: './circular.component.scss'
})
export class CircularComponent implements OnInit {
    // set the dimensions and margins of the graph
    margin = { top: 10, right: 10, bottom: 10, left: 10 };
    width = 460 - this.margin.left - this.margin.right;
    height = 460 - this.margin.top - this.margin.bottom;
    innerRadius = 80;
    outerRadius = Math.min(this.width, this.height) / 2; // the outerRadius goes from the middle of the SVG area to the border

    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.csv('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/OneCatOneNum.csv').then((d: any) => {
            this.createSvg(d);
        });
    }

    createSvg(data: any) {
        // append the svg object to the body of the page
        this.svg = d3
            .select('figure#circular')
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + (this.height / 2 + 100) + ')'); // Add 100 on Y translation, cause upper bars are longer

        // X scale
        const x = d3
            .scaleBand()
            .range([0, 2 * Math.PI]) // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
            .align(0) // This does nothing ?
            .domain(
                data.map(function (d: any) {
                    return d.Country;
                })
            ); // The domain of the X axis is the list of states.

        // Y scale
        const y = d3
            .scaleRadial()
            .range([this.innerRadius, this.outerRadius]) // Domain will be define later.
            .domain([0, 10000]); // Domain of Y is from 0 to the max seen in the data

        // Add bars
        this.svg
            .append('g')
            .selectAll('path')
            .data(data)
            .enter()
            .append('path')
            .attr('fill', '#69b3a2')
            .attr(
                'd',
                d3
                    .arc() // imagine your doing a part of a donut plot
                    .innerRadius(this.innerRadius)
                    .outerRadius((d: any) => y(+d.Value))
                    .startAngle((d: any) => x(d.Country) ?? 0)
                    .endAngle((d: any) => (x(d.Country) ?? 0) + x.bandwidth())
                    .padAngle(0.01)
                    .padRadius(this.innerRadius)
            );
    }
}
