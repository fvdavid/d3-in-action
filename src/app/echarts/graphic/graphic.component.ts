import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';

import type { EChartsCoreOption } from 'echarts/core';
import { provideEchartsCore, NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { TitleComponent } from 'echarts/components';
import { TooltipComponent } from 'echarts/components';
import { GraphicComponent } from 'echarts/components';

echarts.use([GraphicComponent, CanvasRenderer, TitleComponent, TooltipComponent]);

@Component({
    selector: 'app-graphic',
    imports: [FluidModule, NgxEchartsDirective],
    templateUrl: './graphic.component.html',
    styleUrl: './graphic.component.scss',
    providers: [provideEchartsCore({ echarts })]
})
export class EcGraphicComponent {
    optionsGraphic: EChartsCoreOption = {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: 'fvdavid',
                        fontSize: 80,
                        fontWeight: 'bold',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'transparent',
                        stroke: '#000',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 3000,
                        loop: true,
                        keyframes: [
                            {
                                percent: 0.7,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            },
                            {
                                // Stop for a while.
                                percent: 0.8,
                                style: {
                                    fill: 'transparent'
                                }
                            },
                            {
                                percent: 1,
                                style: {
                                    fill: 'black'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    };
}
