import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScatterComponent } from './scatter/scatter.component';

const routes: Routes = [
    {
        path: 'scatter',
        component: ScatterComponent
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
