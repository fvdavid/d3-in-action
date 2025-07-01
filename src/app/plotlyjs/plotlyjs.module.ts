import { NgModule } from '@angular/core';
import { ScatterComponent } from './scatter/scatter.component';
import { PlotlyjsRoutingModule } from './plotlyjs.routes';
import { FluidModule } from 'primeng/fluid';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

@NgModule({
    imports: [
        PlotlyjsRoutingModule,
        FluidModule,
        PlotlyModule.forRoot(PlotlyJS)],
    declarations: [ScatterComponent]
})
export class PlotlyjsModule {}
