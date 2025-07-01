import { NgModule } from '@angular/core';
import { ScatterComponent } from './scatter/scatter.component';
import { PlotlyjsRoutingModule } from './plotlyjs.routes';
import { FluidModule } from 'primeng/fluid';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';

@NgModule({
    imports: [
        PlotlyjsRoutingModule,
        FluidModule,
        PlotlyModule.forRoot(PlotlyJS)],
    declarations: [
        ScatterComponent,
        StackedBarChartComponent
    ]
})
export class PlotlyjsModule {}
