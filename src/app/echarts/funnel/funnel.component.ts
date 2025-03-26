import { Component, OnInit } from '@angular/core';
import { FluidModule } from 'primeng/fluid';

import type { EChartsCoreOption } from 'echarts/core';
import { provideEchartsCore, NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { TitleComponent } from 'echarts/components';
import { TooltipComponent } from 'echarts/components';
import { FunnelChart } from 'echarts/charts';
import { ToolboxComponent } from 'echarts/components';
import { LegendComponent } from 'echarts/components';

echarts.use([FunnelChart, CanvasRenderer, TitleComponent, TooltipComponent, ToolboxComponent, LegendComponent]);

@Component({
    selector: 'app-funnel',
    imports: [FluidModule, NgxEchartsDirective],
    templateUrl: './funnel.component.html',
    styleUrl: './funnel.component.scss',
    providers: [provideEchartsCore({ echarts })]
})
export class FunnelComponent implements OnInit {
    optionsFunnel!: EChartsCoreOption;

    ngOnInit(): void {
        this.optionsFunnel = {
            title: {
                text: 'Funnel'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
            },

            series: [
                {
                    name: 'Funnel',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    bottom: 60,
                    width: '80%',
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1
                    },
                    emphasis: {
                        label: {
                            fontSize: 20
                        }
                    },
                    data: [
                        { value: 60, name: 'Visit' },
                        { value: 40, name: 'Inquiry' },
                        { value: 20, name: 'Order' },
                        { value: 80, name: 'Click' },
                        { value: 100, name: 'Show' }
                    ]
                }
            ]
        };
    }
}
