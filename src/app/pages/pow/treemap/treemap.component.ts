import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-treemap',
    imports: [FluidModule],
    templateUrl: './treemap.component.html',
    styleUrl: './treemap.component.scss'
})
export class TreemapComponent implements OnInit {
    // set the dimensions and margins of the graph
    margin = { top: 10, right: 10, bottom: 10, left: 10 };
    width = 445 - this.margin.left - this.margin.right;
    height = 445 - this.margin.top - this.margin.bottom;

    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.csv('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/data_hierarchy_level1.csv').then((d: any) => {
            this.createSvg(d);
        });
    }

    createSvg(data: any) {
        // append the svg object to the body of the page
        this.svg = d3
            .select('figure#treemap')
            .append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        // stratify the data: reformatting for d3.js
        const root = d3
            .stratify()
            .id(function (d: any) {
                return d.name;
            }) // Name of the entity (column name is name in csv)
            .parentId(function (d: any) {
                return d.parent;
            })(
            // Name of the parent (column name is parent in csv)
            data
        );
        root.sum(function (d: any) {
            return +d.value;
        }); // Compute the numeric value for each entity

        // Then d3.treemap computes the position of each element of the hierarchy
        // The coordinates are added to the root object above
        d3.treemap().size([this.width, this.height]).padding(4)(root);

        // console.log('root ==> ', root.leaves());
        // use this information to add rectangles:
        this.svg
            .selectAll('rect')
            .data(root.leaves())
            .enter()
            .append('rect')
            .attr('x', function (d: any) {
                return d.x0;
            })
            .attr('y', function (d: any) {
                return d.y0;
            })
            .attr('width', function (d: any) {
                return d.x1 - d.x0;
            })
            .attr('height', function (d: any) {
                return d.y1 - d.y0;
            })
            .style('stroke', 'black')
            .style('fill', '#69b3a2');

        // and to add the text labels
        this.svg
            .selectAll('text')
            .data(root.leaves())
            .enter()
            .append('text')
            .attr('x', function (d: any) {
                return d.x0 + 10;
            }) // +10 to adjust position (more right)
            .attr('y', function (d: any) {
                return d.y0 + 20;
            }) // +20 to adjust position (lower)
            .text(function (d: any) {
                return d.data.name;
            })
            .attr('font-size', '15px')
            .attr('fill', 'white');
    }
}
