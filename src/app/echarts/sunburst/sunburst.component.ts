import { Component, OnInit } from '@angular/core';

import type { EChartsCoreOption } from 'echarts/core';
import { provideEchartsCore, NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { TitleComponent } from 'echarts/components';
import { TooltipComponent } from 'echarts/components';

import { ToolboxComponent } from 'echarts/components';
import { GridComponent } from 'echarts/components';
import { DataZoomComponent } from 'echarts/components';

echarts.use([SunburstChart, CanvasRenderer, TitleComponent, TooltipComponent, ToolboxComponent, GridComponent, DataZoomComponent]);

import { SunburstChart } from 'echarts/charts';
import { FluidModule } from 'primeng/fluid';

@Component({
  selector: 'app-sunburst',
  imports: [NgxEchartsDirective, FluidModule],
  templateUrl: './sunburst.component.html',
  styleUrl: './sunburst.component.scss',
  providers: [provideEchartsCore({ echarts })]
})
export class SunburstComponent {
    options!: EChartsCoreOption;

    constructor() {
        const data = [
            {
                name: 'Grandpa',
                children: [
                    {
                        name: 'Uncle Leo',
                        value: 15,
                        children: [
                            {
                                name: 'Cousin Jack',
                                value: 2
                            },
                            {
                                name: 'Cousin Mary',
                                value: 5,
                                children: [
                                    {
                                        name: 'Jackson',
                                        value: 2
                                    }
                                ]
                            },
                            {
                                name: 'Cousin Ben',
                                value: 4
                            }
                        ]
                    },
                    {
                        name: 'Father',
                        value: 10,
                        children: [
                            {
                                name: 'Me',
                                value: 5
                            },
                            {
                                name: 'Brother Peter',
                                value: 1
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Nancy',
                children: [
                    {
                        name: 'Uncle Nike',
                        children: [
                            {
                                name: 'Cousin Betty',
                                value: 1
                            },
                            {
                                name: 'Cousin Jenny',
                                value: 2
                            }
                        ]
                    }
                ]
            }
        ];

        this.options = {
            series: {
                type: 'sunburst',
                // emphasis: {
                //     focus: 'ancestor'
                // },
                data: data,
                radius: [0, '90%'],
                label: {
                    rotate: 'radial'
                }
            }
        };
    }

    ngOnInit(): void {}
}
