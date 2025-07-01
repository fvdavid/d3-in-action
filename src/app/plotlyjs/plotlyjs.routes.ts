import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScatterComponent } from './scatter/scatter.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';

const routes: Routes = [
    {
        path: 'scatter',
        component: ScatterComponent
    },
    {
        path: 'stacked-bar-chart',
        component: StackedBarChartComponent
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlotlyjsRoutingModule {}
