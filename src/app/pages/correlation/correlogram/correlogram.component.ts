import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-correlogram',
    imports: [],
    templateUrl: './correlogram.component.html',
    styleUrl: './correlogram.component.scss'
})
export class CorrelogramComponent implements OnInit {
    // Graph dimension
    margin = { top: 20, right: 20, bottom: 20, left: 20 };
    width = 430 - this.margin.left - this.margin.right;
    height = 430 - this.margin.top - this.margin.bottom;

    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.csv('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/data_correlogram.csv').then((d: any) => {
            // d.sort((a: any, b: any) => a.Value - b.Value);
            this.createSvg(d);
        });
    }

    createSvg(datas: any) {
        // Create the svg area
        this.svg = d3
            .select('figure#correlogram')
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        // Going from wide to long format
        let data = new Array();
        datas.forEach(function (d: any) {
            const x = d[''];
            delete d[''];
            for (let prop in d) {
                const y = prop,
                    value = d[prop];
                data.push({
                    x: x,
                    y: y,
                    value: +value
                });
            }
        });

        // List of all constiables and number of them
        // const domain = d3
        //     .set(
        //         data.map(function (d: any) {
        //             return d.x;
        //         })
        //     )
        //     .values();
        const domain = Array.from(d3.group(data, (d: any) => d.x).keys());
        const num = Math.sqrt(data.length);

        // Create a color scale
        const color =
            // d3.scaleLinear().domain([-1, 0, 1]).range(['#B22222', '#fff', '#000080']);
            d3.scaleLinear([-1, 0, 1], ['#B22222', '#fff', '#000080']);

        // Create a size scale for bubbles on top right. Watch out: must be a rootscale!
        const size = d3.scaleSqrt().domain([0, 1]).range([0, 9]);

        // X scale
        const x = d3.scalePoint().range([0, this.width]).domain(domain);

        // Y scale
        const y = d3.scalePoint().range([0, this.height]).domain(domain);

        // Create one 'g' element for each cell of the correlogram
        const cor = this.svg
            .selectAll('.cor')
            .data(data)
            .enter()
            .append('g')
            .attr('class', 'cor')
            .attr('transform', function (d: any) {
                return 'translate(' + x(d.x) + ',' + y(d.y) + ')';
            });

        // Low left part + Diagonal: Add the text with specific color
        cor.filter(function (d: any) {
            const ypos = domain.indexOf(d.y);
            const xpos = domain.indexOf(d.x);
            return xpos <= ypos;
        })
            .append('text')
            .attr('y', 5)
            .text(function (d: any) {
                if (d.x === d.y) {
                    return d.x;
                } else {
                    return d.value.toFixed(2);
                }
            })
            .style('font-size', 11)
            .style('text-align', 'center')
            .style('fill', function (d: any) {
                if (d.x === d.y) {
                    return '#000';
                } else {
                    return color(d.value);
                }
            });

        // Up right part: add circles
        cor.filter(function (d: any) {
            const ypos = domain.indexOf(d.y);
            const xpos = domain.indexOf(d.x);
            return xpos > ypos;
        })
            .append('circle')
            .attr('r', function (d: any) {
                return size(Math.abs(d.value));
            })
            .style('fill', function (d: any) {
                if (d.x === d.y) {
                    return '#000';
                } else {
                    return color(d.value);
                }
            })
            .style('opacity', 0.8);
    }
}
