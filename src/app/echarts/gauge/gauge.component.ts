import { Component, OnInit } from '@angular/core';
import { provideEchartsCore, NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { TitleComponent } from 'echarts/components';
import { TooltipComponent } from 'echarts/components';
import type { EChartsCoreOption } from 'echarts/core';

import { GaugeChart } from 'echarts/charts';
import { FluidModule } from 'primeng/fluid';

echarts.use([GaugeChart, CanvasRenderer, TitleComponent, TooltipComponent]);

@Component({
    selector: 'app-gauge',
    imports: [NgxEchartsDirective, FluidModule],
    templateUrl: './gauge.component.html',
    styleUrl: './gauge.component.scss',
    providers: [provideEchartsCore({ echarts })]
})
export class GaugeComponent implements OnInit {
    options!: EChartsCoreOption;

    gaugeData = [
        {
            value: 20,
            name: 'Good',
            title: {
                offsetCenter: ['-40%', '80%']
            },
            detail: {
                offsetCenter: ['-40%', '95%']
            }
        },
        {
            value: 40,
            name: 'Better',
            title: {
                offsetCenter: ['0%', '80%']
            },
            detail: {
                offsetCenter: ['0%', '95%']
            }
        },
        {
            value: 60,
            name: 'Perfect',
            title: {
                offsetCenter: ['40%', '80%']
            },
            detail: {
                offsetCenter: ['40%', '95%']
            }
        }
    ];

    ngOnInit(): void {
        this.options = {
            series: [
                {
                    type: 'gauge',
                    anchor: {
                        show: true,
                        showAbove: true,
                        size: 18,
                        itemStyle: {
                            color: '#FAC858'
                        }
                    },
                    pointer: {
                        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                        width: 8,
                        length: '80%',
                        offsetCenter: [0, '8%']
                    },

                    progress: {
                        show: true,
                        overlap: true,
                        roundCap: true
                    },
                    axisLine: {
                        roundCap: true
                    },
                    data: this.gaugeData,
                    title: {
                        fontSize: 14
                    },
                    detail: {
                        width: 40,
                        height: 14,
                        fontSize: 14,
                        color: '#fff',
                        backgroundColor: 'inherit',
                        borderRadius: 3,
                        formatter: '{value}%'
                    }
                }
            ]
        };
    }
}
