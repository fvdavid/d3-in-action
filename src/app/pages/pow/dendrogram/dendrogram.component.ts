import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-dendrogram',
    imports: [FluidModule],
    templateUrl: './dendrogram.component.html',
    styleUrl: './dendrogram.component.scss'
})
export class DendrogramComponent implements OnInit {
    svg: any;

    ngOnInit(): void {
        this.getTheData();
    }

    getTheData() {
        d3.json('https://raw.githubusercontent.com/fvdavid/d3-in-action/refs/heads/main/data/data_dendrogram.json').then((d: any) => {
            this.createSvg(d);
        });
    }

    createSvg(data: any) {
        // set the dimensions and margins of the graph
        const width = 460;
        const height = 460;

        // append the svg object to the body of the page
        this.svg = d3.select('figure#dendrogram').append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(40,0)'); // bit of margin on the left = 40

        // Create the cluster layout:
        const cluster = d3.cluster().size([height, width - 100]); // 100 is the margin I will have on the right side

        // Give the data to this cluster layout:
        const root = d3.hierarchy(data, function (d) {
            return d.children;
        });
        cluster(root);

        // Add the links between nodes:
        this.svg
            .selectAll('path')
            .data(root.descendants().slice(1))
            .enter()
            .append('path')
            .attr('d', function (d: any) {
                return (
                    'M' +
                    d.y +
                    ',' +
                    d.x +
                    'C' +
                    (d.parent.y + 50) +
                    ',' +
                    d.x +
                    ' ' +
                    (d.parent.y + 150) +
                    ',' +
                    d.parent.x + // 50 and 150 are coordinates of inflexion, play with it to change links shape
                    ' ' +
                    d.parent.y +
                    ',' +
                    d.parent.x
                );
            })
            .style('fill', 'none')
            .attr('stroke', '#ccc');

        // Add a circle for each node.
        this.svg
            .selectAll('g')
            .data(root.descendants())
            .enter()
            .append('g')
            .attr('transform', function (d: any) {
                return 'translate(' + d.y + ',' + d.x + ')';
            })
            .append('circle')
            .attr('r', 7)
            .style('fill', '#69b3a2')
            .attr('stroke', 'black')
            .style('stroke-width', 2);
    }
}
