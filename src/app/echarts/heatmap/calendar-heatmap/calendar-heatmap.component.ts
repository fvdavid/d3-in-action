import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { provideEchartsCore, NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { TooltipComponent } from 'echarts/components';
import { GridComponent } from 'echarts/components';
import { VisualMapComponent } from 'echarts/components';
import { CalendarComponent } from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { HeatmapChart } from 'echarts/charts';
import type { EChartsCoreOption } from 'echarts/core';
import { time as echartTime } from 'echarts/core';

echarts.use([CanvasRenderer, TitleComponent, TooltipComponent, GridComponent, VisualMapComponent, CalendarComponent, LabelLayout, UniversalTransition, HeatmapChart]);

@Component({
    selector: 'app-calendar-heatmap',
    imports: [NgxEchartsDirective],
    templateUrl: './calendar-heatmap.component.html',
    styleUrl: './calendar-heatmap.component.scss',
    providers: [provideEchartsCore({ echarts })],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarHeatmapComponent implements OnInit {
    chartOption!: EChartsCoreOption;

    ngOnInit(): void {
        this.chartOption = {
            title: {
                top: 30,
                left: 'center',
                text: 'Daily Step Count'
            },
            tooltip: {},
            visualMap: {
                min: 0,
                max: 10000,
                type: 'piecewise',
                orient: 'horizontal',
                left: 'center',
                top: 65
            },
            calendar: {
                top: 120,
                left: 30,
                right: 30,
                cellSize: ['auto', 13],
                range: '2016',
                itemStyle: {
                    borderWidth: 0.5
                },
                yearLabel: { show: false }
            },
            series: {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: this.getVirtualData('2016')
            }
        };
    }

    getVirtualData(year: string) {
        const date = +echartTime.parse(year + '-01-01');
        const end = +echartTime.parse(+year + 1 + '-01-01');
        const dayTime = 3600 * 24 * 1000;
        const data: [string, number][] = [];
        for (let time = date; time < end; time += dayTime) {
            data.push([echartTime.format(time, '{yyyy}-{MM}-{dd}', false), Math.floor(Math.random() * 10000)]);
        }
        return data;
    }
}
