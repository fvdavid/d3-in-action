import { Routes } from '@angular/router';

export default [
    {
        path: 'scatter-plot',
        loadComponent: () => import('./scatterplot/scatterplot.component').then((s) => s.ScatterplotComponent)
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
