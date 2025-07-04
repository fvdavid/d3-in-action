import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { select as d3_select } from 'd3-selection';
import 'd3-transition';
import { easeQuadInOut as d3_easeQuadInOut } from 'd3-ease';
import { scaleOrdinal as d3_scaleOrdinal } from 'd3-scale';

import { sankey as d3_sankey, sankeyLinkHorizontal as d3_sankeyLinkHorizontal, sankeyJustify as d3_sankeyJustify, sankeyLeft as d3_sankeyLeft, sankeyRight as d3_sankeyRight, sankeyCenter as d3_sankeyCenter } from 'd3-sankey';

import { drag as d3_drag } from 'd3-drag';

const COLORS = ['#B70077', '#0384D4', '#EE6B0B', '#A319B1', '#11A611', '#1BB9FF', '#495A9C', '#EDB700', '#8B98C8', '#E6C49C', '#CCB8CE', '#9B9B9B'];

@Component({
    selector: 'app-sankey-d3',
    imports: [],
    template: ``
})
export class SankeyD3Component {
    @HostBinding('class.pbds-chart')
    chartClass = true;

    @HostBinding('class.pbds-chart-sankey')
    sankeyClass = true;

    @Input()
    data: any;

    @Input()
    width = 900;

    @Input()
    height = 600;

    @Input()
    rotate = true;

    private chart: any;
    private container: any;
    private margin: any;
    private svg: any;
    private sankey: any;
    private nodes: any;
    private links: any;
    private colors: any;

    constructor(private _element: ElementRef) {}

    ngOnInit() {
        // console.log('DATA: ', this.data);

        this.margin = { top: 10, right: 10, bottom: 10, left: 10 };

        this.chart = d3_select(this._element.nativeElement).attr('aria-hidden', 'true');

        this.svg = this.chart.append('svg').attr('class', 'img-fluid').attr('preserveAspectRatio', 'xMinYMin meet');

        this.container = this.svg.append('g').attr('class', 'container');

        this.links = this.container.append('g').attr('class', 'links');
        this.nodes = this.container.append('g').attr('class', 'nodes');

        this.update();
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log('CHANGES: ', changes);

        if ((changes && changes['data'] && !changes['data'].firstChange) || (changes['rotate'] && !changes['rotate'].firstChange)) {
            this.update();
        }
    }

    update() {
        //rotate
        if (this.rotate) {
            this.svg.attr('width', this.height).attr('height', this.width).attr('viewBox', `-${this.margin.left} -${this.margin.top} ${this.height} ${this.width}`);

            let cx = this.height / 2;
            let cy = this.height - this.margin.right - this.margin.left;

            this.container.attr('transform', `translate(${cy}, 0) rotate(90)`);
        } else {
            this.svg.attr('width', this.width).attr('height', this.height).attr('viewBox', `-${this.margin.left} -${this.margin.top} ${this.width} ${this.height}`);

            this.container.attr('transform', null);
        }

        // set up colors
        const labels = new Set();
        this.data.nodes.map((d: any) => labels.add(d.id));
        const labelsArray: any[] = Array.from(labels);
        this.colors = d3_scaleOrdinal().domain(labelsArray).range(COLORS);
        // console.log(labels, labelsArray);

        // Set the sankey diagram properties
        this.sankey = d3_sankey()
            .nodeId((d: any) => d.id)
            .nodeWidth(32)
            .nodeAlign(d3_sankeyCenter)
            .nodePadding(50)
            .size([this.width - this.margin.left - this.margin.right, this.height - this.margin.top - this.margin.bottom])
            .iterations(50);

        this.sankey(this.data);

        // LINKS
        this.links
            .attr('fill', 'none')
            .selectAll('path')
            .data(this.data.links)
            .join(
                (enter: any) => {
                    return enter
                        .append('path')
                        .attr('d', d3_sankeyLinkHorizontal())
                        .attr('stroke-width', (d: any) => d.width)
                        .attr('stroke', (d: any) => {
                            // return '#000';
                            // console.log('STROKE: ', d, this.colors(d.id));
                            return this.colors(d.source.id);
                        })
                        .style('opacity', 0.3)
                        .style('mix-blend-mode', 'multiply');
                },
                (update: any) =>
                    update
                        .transition()
                        .duration(1000)
                        .ease(d3_easeQuadInOut)
                        .attr('d', d3_sankeyLinkHorizontal())
                        .attr('stroke-width', (d: any) => d.width),

                (exit: any) => {
                    return exit.remove();
                }
            )
            .on('mouseenter', (event: any, data: any) => this.onMouseEnterLink(event, data))
            .on('mouseleave', (event: any, data: any) => this.onMouseLeaveLink(event, data));

        // NODES
        this.nodes
            .selectAll('rect')
            .data(this.data.nodes)
            .join(
                (enter: any) => {
                    return enter
                        .append('rect')
                        .attr('x', (d: any) => d.x0)
                        .attr('y', (d: any) => d.y0)
                        .attr('height', (d: any) => d.y1 - d.y0)
                        .attr('width', (d: any) => this.sankey.nodeWidth())
                        .attr('fill', (d: any, i: any) => {
                            // console.log('FILL: ', d, this.colors(d.id));
                            return this.colors(d.id);
                        });
                    // .call(
                    //   d3_drag()
                    //     .subject((d: any) => {
                    //       return d;
                    //     })
                    //     .on('start', (event, data) => {
                    //       console.log('START: ', event, data, event.parentNode);
                    //       // this.parentNode.appendChild(this);
                    //     })
                    //     .on('drag', (event, data) => this.dragmove(event, data))
                    // );
                },
                (update: any) => {
                    return update
                        .transition()
                        .duration(1000)
                        .ease(d3_easeQuadInOut)
                        .attr('x', (d: any) => d.x0)
                        .attr('y', (d: any) => d.y0)
                        .attr('height', (d: any) => d.y1 - d.y0)
                        .attr('width', (d: any) => this.sankey.nodeWidth());
                },
                (exit: any) => {
                    return exit.remove();
                }
            )
            .on('mouseenter', (event: any, data: any) => console.log('mouseenter ==>', data));

        // NODE TEXT
        this.nodes
            .selectAll('text')

            .data(this.data.nodes)
            .join(
                (enter: any) =>
                    enter
                        .append('text')
                        .text((d: any) => `${d.name}`)
                        .style('fill', '#000000')
                        .attr('font-weight', 900)
                        .attr('text-anchor', 'middle')
                        .attr('x', (d: any, i: any) => {
                            return d.x0 + (d.x1 - d.x0) / 2;
                        })
                        .attr('y', (d: any, i: any) => {
                            return d.y0 + (d.y1 - d.y0) / 2;
                        })
                        .attr('dy', '0.35em')
                        .attr('transform', (d: any, i: any) => {
                            const x = d.x0 + (d.x1 - d.x0) / 2;
                            const y = d.y0 + (d.y1 - d.y0) / 2;
                            return `rotate(270, ${x}, ${y})`;
                        }),
                (update: any) =>
                    update
                        .transition()
                        .duration(1000)
                        .ease(d3_easeQuadInOut)
                        .attr('x', (d: any, i: any) => {
                            return d.x0 + (d.x1 - d.x0) / 2;
                        })
                        .attr('y', (d: any, i: any) => {
                            return d.y0 + (d.y1 - d.y0) / 2;
                        })
                        .attr('transform', (d: any, i: any) => {
                            const x = d.x0 + (d.x1 - d.x0) / 2;
                            const y = d.y0 + (d.y1 - d.y0) / 2;
                            return `rotate(270, ${x}, ${y})`;
                        })
            );
    }

    onMouseEnterLink(event: any, data: any) {
        console.log('onMouseEnterLink ==> ', data);
        const element = d3_select(event.target);

        // this.links.selectAll('path').style('opacity', 0.2);

        element.style('opacity', 1).style('mix-blend-mode', null);
    }

    onMouseLeaveLink(event: any, data: any) {
        this.links.selectAll('path').style('opacity', 0.3);
    }

    dragmove(event: any, data: any) {
        console.log('dragmove ==> ', event + ' - ' + data);
        // d3_select(event)
        //   .attr("transform",
        //         "translate("
        //            + event.x + ","
        //            + (event.y = Math.max(
        //               0, Math.min(height - event.dy, d3.event.y))
        //              ) + ")");
        // sankey.relayout();
        // link.attr("d", path);
    }
}
